import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display',
  imports: [],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css',
})
export class DisplayComponent {
  @Input() value: string = '0';
  @Output() valueChange = new EventEmitter<string>();

  onInput(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;
    this.valueChange.emit(newValue);
  }
}
