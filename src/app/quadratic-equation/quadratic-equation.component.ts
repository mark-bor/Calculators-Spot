import { Component } from '@angular/core';

@Component({
  selector: 'quadratic-equation',
  standalone: true,
  imports: [],
  templateUrl: './quadratic-equation.component.html',
  styleUrl: './quadratic-equation.component.scss'
})
export class QuadraticEquationComponent {
  a: number | 'a' = 'a';
  b: number | 'b' = 'b';
  c: number | 'c' = 'c';

  x1: number | 'NaN' | undefined;
  x2: number | 'NaN' | undefined;

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
  setC(value: any) {
    const c = value.target.valueAsNumber;
    if (c===0) this.c = c;
    else this.c = c ? c : 'c';
  }

  reset() {
    this.a = 'a';
    this.b = 'b';
    this.c = 'c';

    this.x1 = undefined;
    this.x2 = undefined;
  }

  calculate() {
    if (this.a==='a') this.a=1;
    if (this.b==='b') this.b=1;
    if (this.c==='c') this.c=1;

    const desk: number = (this.b * this.b) + (4 * this.a * this.c);
    const dk: number = Math.sqrt(desk);
    const a2: number = 2 * this.a;
    
    if (desk<0 || a2===0) {
      this.x1 = 'NaN';
      this.x2 = 'NaN';
    }
    else if (desk===0) {
      const x: number = +(-this.b / a2).toFixed(1);
      this.x1 = x;
      this.x2 = x;
    }
    else if (desk>0) {
      this.x1 = +((-this.b + dk) / a2).toFixed(1);
      this.x2 = +((-this.b - dk) / a2).toFixed(1);
    }
  }
}
