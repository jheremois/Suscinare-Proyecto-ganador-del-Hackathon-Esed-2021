import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

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
         data: [180, 480, 770, 90, 1000, 270, 400,300,100,200],
         label:'agosto',
        // data: [400, 130, 200, 400, 130, 400, 130, 200, 400, 130],
        backgroundColor: ["#1DA0FF", "#004AAD", "#1DA0FF", "#004AAD", "#1DA0FF", "#004AAD", "#1DA0FF", "#004AAD", "#1DA0FF", "#004AAD"],
        hoverBackgroundColor:["#1DA0FF", "#004AAD", "#1DA0FF", "#004AAD", "#1DA0FF", "#004AAD", "#1DA0FF", "#004AAD", "#1DA0FF", "#004AAD"]
      }],
    type: 'bar',

  }

  public lineChartLabels: Label[] = ['1', '2', '3', '4', '5', '6', '7'];
  public lineChartData: ChartDataSets[] = [
    { data: [0, 29, 30, 40, 26, 15, 10], label: 'Series A' },
  ];

  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'gray',
          },
          ticks: {
            fontColor: '',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: false,
            fontColor: 'gray',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(255,255,255,0)',
      borderColor: '#004AAD',
    },

  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';

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
