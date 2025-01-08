import { Component } from '@angular/core';
import { LogicComponent } from './logic/logic.component';
import { DisplayComponent } from './display/display.component';

@Component({
  selector: 'app-calculator',
  imports: [LogicComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {}
