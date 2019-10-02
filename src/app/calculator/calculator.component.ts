import { Component, OnInit } from '@angular/core';

const CALCULATOR_KEYS = [
  { value: '/', label: '/' },
  { value: '*', label: 'X' },
  { value: '-', label: '-' },
  { value: '+', label: '+' },
  { value: '7', label: '7' },
  { value: '8', label: '8' },
  { value: '9', label: '9' },
  { value: '<<', label: '<<' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
  { value: 'C', label: 'C' },
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '=', label: '=' },
  { value: '.', label: '.' },
  { value: '0', label: '0' }
]

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  calculatorKeys = CALCULATOR_KEYS;
  calculationString = '';
  operatorList: string[] = ['/', '*', '+', '-'];
  operator = '';
  operatorSet = false;
  result = 0;
  constructor() { }

  ngOnInit() {
  }

  keyPressHandler(key) {
    const keyValue = key.value;
    const lastKey = this.calculationString[this.calculationString.length - 1];
    if (this.operatorList.indexOf(keyValue) !== -1) {
      if (this.operatorList.indexOf(lastKey) !== -1) {
        this.operatorSet = true;
      }
      if (this.operatorSet || this.calculationString === '') {
        return;
      }else if(this.calculationString.split(this.operator).length === 2){
        this.getAnswer();
      }
      this.operator = keyValue;
    } else {
      this.operatorSet = false;
    }
    if (keyValue === '=') {
      if(this.operatorList.indexOf(lastKey) !== -1){
        return;
      }
      this.getAnswer();
    } else if(keyValue === 'C') {
      this.calculationString = '';
      this.operator = '';
      this.result = 0;
    } else if(keyValue === '<<'){
      const operandArray = this.calculationString.split('');
      operandArray.splice(operandArray.length-1,1);
      this.calculationString = operandArray.join('');
    }else {
      this.calculationString += keyValue;
    }
    console.log(this.calculationString);
  }

  getAnswer() {
    const [operand1, operand2] = this.calculationString.split(this.operator);
    if(operand2){
      switch (this.operator) {
        case '+':
          this.result = parseFloat(operand1) + parseFloat(operand2);
          this.calculationString = this.result.toString();
          break;
        case '-':
          this.result = parseFloat(operand1) - parseFloat(operand2);
          this.calculationString = this.result.toString();
          break;
        case '*':
          this.result = parseFloat(operand1) * parseFloat(operand2);
          this.calculationString = this.result.toString();
          break;
        case '/':
          this.result = parseFloat(operand1) / parseFloat(operand2);
          this.calculationString = this.result.toString();
          break;
        default:
          break;
      }
    }else{
      this.calculationString  = operand1;
    }
  }

}
