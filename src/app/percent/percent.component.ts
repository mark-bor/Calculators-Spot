import { Component } from '@angular/core';

@Component({
  selector: 'percent',
  standalone: true,
  imports: [],
  templateUrl: './percent.component.html',
  styleUrl: './percent.component.scss'
})
export class PercentComponent {
  a: number | 'a' = 'a';
  b: number | 'b' = 'b';
  x: number | 'x' = 'x';

  setA(value: any) {
    const a = value.target.valueAsNumber;
    if (a===0) this.a = a;
    else this.a = a ? a : 'a';
  }
  setB(value: any) {
    const b = value.target.valueAsNumber;
    if (b===0) this.b = b;
    else this.b = b ? b : 'b';
  }
  setX(value: any) {
    const x = value.target.valueAsNumber;
    if (x===0) this.x = x;
    else this.x = x ? x : 'x';
  }

  reset() {
    this.a = 'a';
    this.b = 'b';
    this.x = 'x';
  }

  calculate() {
    if (this.a!='a' && this.b!='b' && this.x==='x') {  
      this.x = +((this.a * this.b) / 100).toFixed(1);
      return;
    }

    if (this.a!='a' && this.x!='x' && this.b==='b') {  
      this.b = +((this.x * 100) / this.a).toFixed(1);
      return;
    }

    if (this.b!='b' && this.x!='x' && this.a==='a') {  
      this.a = +((this.x * 100) / this.b).toFixed(1);
      return;
    }

    if (this.a!='a' && this.b!='b' && this.x!='x') {  
      return;
    }

    if (this.a==='a' && this.b==='b' && this.x==='x') {  
      return;
    }
  }
}
