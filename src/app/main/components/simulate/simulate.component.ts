import { Component, Input, OnChanges } from '@angular/core';
import { Details, Result } from '../../interface/details.interface';

@Component({
  selector: 'app-simulate',
  templateUrl: './simulate.component.html',
  styles: [
  ]
})
export class SimulateComponent implements OnChanges {

  @Input() inputDetails!: Details

  resultYear1!: Result
  resultYear2!: Result
  resultYear3!: Result

  constructor() { }

  ngOnChanges(){
    this.resultYear1 = {
      monthly: this.inputDetails.monthly - ((this.inputDetails.monthly*0.3) + (this.inputDetails.annual/12)),
      year: (this.inputDetails.monthly - (this.inputDetails.monthly*0.3 + this.inputDetails.annual/12)) * 12
    }
    this.resultYear2 = {
      monthly: this.inputDetails.monthly - ((this.inputDetails.monthly*0.25) + (this.inputDetails.annual/12)),
      year: (this.inputDetails.monthly - (this.inputDetails.monthly*0.25 + this.inputDetails.annual/12)) * 12
    }
    this.resultYear3 = {
      monthly: this.inputDetails.monthly - ((this.inputDetails.monthly*0.2) + (this.inputDetails.annual/12)),
      year: (this.inputDetails.monthly - (this.inputDetails.monthly*0.2 + this.inputDetails.annual/12)) * 12
    }
    console.log(this.resultYear1)
    console.log(this.resultYear2)
    console.log(this.resultYear3)
    console.log(this.inputDetails)

  }

}
