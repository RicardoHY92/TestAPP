import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Details } from '../../interface/details.interface';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [
  ]
})
export class InputComponent implements OnInit {

  @Output() emitInputs = new EventEmitter<Details>()

  private inputDetails: Details = {
    price: 0,
    monthly: 0,
    annual: 0
  }

  myInputs: FormGroup = this.fb.group({
    propertyPrice: ['', [Validators.required, Validators.min(0)]],
    monthlyRent: ['', [Validators.required, Validators.min(0)]],
    annualRental: ['', [Validators.required, Validators.min(0)]]
  })

  

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  validField(field: string){
    return this.myInputs.controls[field].errors && this.myInputs.controls[field].touched
  }

  calculate(){
    if(this.myInputs.invalid){
      this.myInputs.markAllAsTouched()
      return
    }
    this.inputDetails = {
      price: this.myInputs.controls['propertyPrice'].value,
      monthly: this.myInputs.controls['monthlyRent'].value,
      annual: this.myInputs.controls['annualRental'].value,
    }
    this.emitInputs.emit(this.inputDetails)
    this.myInputs.reset()
  }
}
