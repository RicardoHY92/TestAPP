import { Component, OnInit } from '@angular/core';
import { Details } from '../../interface/details.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  inputDetails: Details = {
    price: 0,
    monthly: 0,
    annual: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  auxDetails(event: Details){
    this.inputDetails = event
  }
}
