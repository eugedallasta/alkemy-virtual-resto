import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import Swal from 'sweetalert2';
import { DishSearchService } from 'src/app/services/dish-search.service';
import { DishesSelectionService } from 'src/app/services/dishes-selection.service';
import { Result } from 'src/app/interfaces/api';

@Component({
  selector: 'app-dish-search',
  templateUrl: './dish-search.component.html',
  styleUrls: ['./dish-search.component.css']
})
export class DishSearchComponent implements OnInit {

  searchbar = new FormControl;
  dishes: Array<Result> = [];

  constructor(private searchService: DishSearchService, private menu: DishesSelectionService) {
    this.searchbar.valueChanges.pipe(debounceTime(1200)).subscribe(result => {
      if (this.searchbar.value?.length > 2) {
        this.getDishes();
      } else {
        this.dishes = [];
      }
    });
  }

  ngOnInit(): void {
  }

  getDishes() {
    this.searchService.searchDish(this.searchbar.value).subscribe(result => {
      this.dishes = result.results;
    });
  }
  addDishButton(index: number) {
    if (this.menu.numOfDishes() == 4) {
      this.maxErrorAlert();
    } else {
      if (this.dishes[index]?.vegan) {
        if (this.menu.numOfVeganDishes() == 2) {
          this.addErrorAlert();
        } else {
          this.addAlert(this.dishes[index]);
        }
      } else {
        if (this.menu.numOfVeganDishes() == 0 && this.menu.numOfDishes() == 2) {
          this.addErrorAlert();
        } else if (this.menu.numOfVeganDishes() == 0 && this.menu.numOfDishes() == 2) {
          this.addErrorAlert();
        } else {
          this.addAlert(this.dishes[index]);
        }
      }
    }
  }
  //Alertas de SweetAlert2
  addAlert(dish: Result) {
    Swal.fire({
      icon: 'question',
      title: 'Do you wish to add this dish?',
      reverseButtons: true,
      buttonsStyling: false,
      customClass: {
        confirmButton: "btn btn-success mx-2",
        cancelButton: "btn btn-secondary mx-2"
      },
      showCancelButton: true,
      confirmButtonText: "Add"
    }).then(value => {
      if (value.isConfirmed) {
        this.menu.addDish(dish);
        this.addSuccessAlert();
      }
    })
  }
  //Ejecuta un alert para notificar al usuario que se agrego un plato con exito
  addSuccessAlert() {
    Swal.fire({
      icon: "success",
      title: "Dish added",
      buttonsStyling: false,
      customClass: {
        confirmButton: "btn btn-success mx-2",
      }
    });
  }
  //Ejecuta un alert para notificar al usuario que se llego al maximo de platos
  maxErrorAlert() {
    Swal.fire({
      icon: "error",
      title: "You can't add more than 4 dishes",
      buttonsStyling: false,
      customClass: {
        confirmButton: "btn btn-success mx-2",
      }
    });
  }
  //Ejecuta un alert para notificar al usuario que deben haber 2 platos no veganos y 2 veganos
  addErrorAlert() {
    Swal.fire({
      icon: "error",
      title: "There must be 2 vegan and non-vegan dishes",
      buttonsStyling: false,
      customClass: {
        confirmButton: "btn btn-success mx-2",
      }
    });
  }


}
