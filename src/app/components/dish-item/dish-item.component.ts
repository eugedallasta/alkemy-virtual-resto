import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/interfaces/api';

@Component({
  selector: 'app-dish-item',
  templateUrl: './dish-item.component.html',
  styleUrls: ['./dish-item.component.css']
})
export class DishItemComponent implements OnInit {

  @Input() dish !:Result;
  @Input() index !:number;

  constructor() { }

  ngOnInit(): void {
  }

  expandLinkText(element :HTMLElement){
    console.log(typeof(element.getAttribute('aria-expanded')));
    if(element.getAttribute('aria-expanded') == 'true') {
      element.innerHTML = "Close";
    } else {
      element.innerHTML = "More information";
    }
  }

}
