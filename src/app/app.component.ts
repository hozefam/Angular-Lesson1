import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  number1: number;
  number2: number;
  result = 0;
  operator = '+'; // default operator

  onOperationClick(operation: string) {
    this.operator = operation;
    this.calculate();
  }

  onClear() {
    this.number1 = null;
    this.number2 = null;
    this.result = 0;
  }

  calculate() {
    switch (this.operator) {
      case '+':
        this.result = this.number1 + this.number2;
        break;
      case '-':
        this.result = this.number1 - this.number2;
        break;
      case '*':
        this.result = this.number1 * this.number2;
        break;
      case '/':
        this.result = this.number1 / this.number2;
        break;
      default:
        break;
    }
  }
}
