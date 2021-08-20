import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public workPack: grafic = {
    labels: ['manejo de redes', 'Diseno Ui Y Ux', 'Desarrollo de websites'],
    data: [
      {
        data: [100, 100, 100],
        backgroundColor: ['#AE0C0C', '#1DA0FF', '#004AAD']
      }
    ],
  }
  public workComplete: grafic = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct'],
    data: [
      {
        data: [400, 130, 200, 400, 130, 400, 130, 200, 400, 130],
        backgroundColor: ["#1DA0FF", "#004AAD", "#1DA0FF", "#004AAD", "#1DA0FF", "#004AAD", "#1DA0FF", "#004AAD", "#1DA0FF", "#004AAD"],
        hoverBackgroundColor:["#1DA0FF", "#004AAD", "#1DA0FF", "#004AAD", "#1DA0FF", "#004AAD", "#1DA0FF", "#004AAD", "#1DA0FF", "#004AAD"]
      }],
    type: 'bar',

  }
  constructor() { }

  ngOnInit(): void {
    console.log(this.workPack, this.workComplete)
  }

  // getColor(v:[],color){
  //  return v.map((x,i)=>{return (i%2)==0 ? '#1DA0FF':'#004AAD'  })
  // }

}

interface grafic {
  labels: string[],
  data: ChartDataSets[],
  type?: ChartType
}
