import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public ratings: number[] =[];//La idea es sustituir esto por un arreglo con la inf de las empresas
  constructor() { }

  ngOnInit(): void {
    this.ratings = [3, 5, 2, 1, 4, 5, 3, 5, 2];
  }

}
