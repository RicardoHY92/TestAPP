import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './pages/home/home.component';
import { InputComponent } from './components/input/input.component';
import { SimulateComponent } from './components/simulate/simulate.component';



@NgModule({
  declarations: [
    HomeComponent,
    InputComponent,
    SimulateComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
