import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DishSearchService } from 'src/app/services/dish-search.service';
import { DishesSelectionService } from 'src/app/services/dishes-selection.service';
import { Result } from 'src/app/interfaces/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalHealthScore :number = 0;
  totalPrice :string = '';
  totalServingTime :number = 0;

  constructor(private searchService:DishSearchService, private dishes:DishesSelectionService) { }



   //Retorna el menu
   getMenuDishes() :Array<Result>{
    return this.dishes.getMenu();
  }
  //Muestra alert que notifica que se elimino un plato exitosamente
  removeSuccess() {
    Swal.fire({
      icon:"success",
      title:"Dish removed",
      buttonsStyling: false,
      customClass: {
        confirmButton: "btn btn-success mx-2",
      }
    })
  }
  //Recibe un indice y elimina el plato con ese indice del menu
  removeFromMenu(index :number) {
    Swal.fire({
      icon:"warning",
      title:"Do yo wish to remove this dish?",
      reverseButtons: true,
      buttonsStyling: false,
      customClass: {
        confirmButton: "btn btn-danger mx-2",
        cancelButton: "btn btn-secondary mx-2"
      },
      showCancelButton: true,
      confirmButtonText: "Remove"
    }).then(value => {
      if(value.isConfirmed){
        this.dishes.removeDish(index);
        this.removeSuccess();
        this.updateMenu();
      }
    });
  }
  //Actualiza los valores totales del menu
  updateMenu() {
    this.totalHealthScore = this.dishes.getTotalHealthScore();
    this.totalPrice = this.dishes.getTotalPrice();
    this.totalServingTime = this.dishes.getTotalServingTime();
  }

  ngOnInit(): void {
    this.updateMenu();
  }


}
