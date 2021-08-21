import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-placehold',
  templateUrl: './placehold.component.html',
  styleUrls: ['./placehold.component.scss']
})
export class PlaceholdComponent implements OnInit {

  @Input() space: string

  constructor() { }

  ngOnInit(): void {
  }

}
