import { Injectable } from '@angular/core';
import { APIResponse, Result } from '../interfaces/api';

@Injectable({
  providedIn: 'root'
})
export class DishesSelectionService {

  private veganDishes: number = 0;
  private menu: Result[] = [];

  constructor() { }

  //Recibe un objeto (plato) y lo agrega al menu, Si el plato es vegano incrementa la variable de cantidad de platos veganos
  addDish(dish: any) {
    if (dish?.vegan == true) {
      this.veganDishes++;
    }
    this.menu.push(dish);
  }
  //Recibe un numero que indica el indice y elimina el plato en ese indice
  //Si el plato es vegano decrementa la variable de cantidad de platos veganos
  removeDish(index: number) {
    if (this.menu[index]?.vegan == true) {
      this.veganDishes--;
    }
    this.menu.splice(index, 1);
  }
  //Retorna el menu
  getMenu(): Array<Result> {
    return this.menu;
  }
  //Retorna el numero de platos
  numOfDishes() {
    return this.menu.length;
  }
  //Retorna el numero de platos veganos
  numOfVeganDishes() {
    return this.veganDishes;
  }
  //Retorna el precio total del menu
  getTotalPrice(): string {
    let totalPrice: number = 0;
    this.menu.forEach(element => {
      totalPrice += element?.pricePerServing;
    });
    return totalPrice.toFixed(2);
  }
  //Retorna el tiempo total de preparacion del menu
  getTotalServingTime(): number {
    let totalServingTime: number = 0;
    this.menu.forEach(element => {
      totalServingTime += element?.readyInMinutes;
    });
    return totalServingTime;
  }
  //Retoran el healthscore total
  getTotalHealthScore(): number {
    let totalHealthScore: number = 0;
    this.menu.forEach(element => {
      totalHealthScore += element?.healthScore;
    });
    return totalHealthScore;
  }













}
