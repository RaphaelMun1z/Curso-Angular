import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

  name:string = "Raphael";
  age:number = 17;
  job:string = "Programador";
  hobbies = [
    "Jogar",
    "Treinar",
    "Programar"
  ];
  car = {
    name: "Camaro",
    year: 2022
  }

  constructor() { }

  ngOnInit(): void {
  }

}
