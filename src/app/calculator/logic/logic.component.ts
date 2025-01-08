import { Component } from '@angular/core';
import { DisplayComponent } from '../display/display.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logic',
  imports: [DisplayComponent, CommonModule],
  templateUrl: './logic.component.html',
  styleUrl: './logic.component.css',
})
export class LogicComponent {
  displayedValue: string = '0';
  previousValue: string = '0';
  currentValue: number | null = null;
  operation: string | null = null;
  isNewInput: boolean = true;

  newColors: string[] = ['blue', 'green', 'red', 'yellow', 'purple'];
  currentColorIndex: number = 0;

  onDigitClick(digit: string) {
    if (this.isNewInput) {
      this.displayedValue = digit;
      this.isNewInput = false;
    } else {
      this.displayedValue =
        this.displayedValue === '0' ? digit : this.displayedValue + digit;
    }
  }

  calculate() {
    const currentNumber = parseInt(this.displayedValue);
    if (this.operation === '+') {
      this.currentValue! += currentNumber;
    } else if (this.operation === '-') {
      this.currentValue! -= currentNumber;
    } else if (this.operation === '*') {
      this.currentValue! *= currentNumber;
    } else if (this.operation === '/') {
      this.currentValue! /= currentNumber;
    }

    this.previousValue = this.currentValue!.toString();
    this.displayedValue = this.currentValue!.toString();
  }

  onOperationClick(op: string) {
    if (this.currentValue === null) {
      this.currentValue = parseInt(this.displayedValue);
    } else if (this.operation) {
      this.calculate();
    }

    this.operation = op;
    this.isNewInput = true;
  }

  onEqualsTo() {
    if (this.operation && this.currentValue !== null) {
      this.calculate();
      this.currentValue = null;
      this.operation = null;
    }
  }

  onClear() {
    this.displayedValue = '0';
    this.operation = null;
    this.currentValue = null;
    this.isNewInput = true;
  }

  onDisplayValueChange(newValue: string) {
    this.displayedValue = newValue;
  }

  changeColor(): void {
    this.currentColorIndex =
      (this.currentColorIndex + 1) % this.newColors.length;
  }

  get changeColorClass(): string {
    return this.newColors[this.currentColorIndex];
  }

  changeColorAndEqualTo(): void {
    this.onEqualsTo();
    this.changeColor();
  }
}
