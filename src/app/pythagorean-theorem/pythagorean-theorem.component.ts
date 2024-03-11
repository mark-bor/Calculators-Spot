import { Component } from '@angular/core';

@Component({
  selector: 'pythagorean-theorem',
  standalone: true,
  imports: [],
  templateUrl: './pythagorean-theorem.component.html',
  styleUrl: './pythagorean-theorem.component.scss'
})
export class PythagoreanTheoremComponent {
  a: number | 'a' = 'a';
  b: number | 'b' = 'b';
  c: number | 'c' = 'c';

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
  }

  calculate() {
    if (this.a!='a' && this.b!='b' && this.c==='c') {  
      const aa: number = this.a * this.a;
      const bb: number = this.b * this.b;
      this.c = +Math.sqrt(aa + bb).toFixed(1);
      return;
    }

    if (this.a!='a' && this.c!='c' && this.b==='b') {  
      const aa: number = this.a * this.a;
      const cc: number = this.c * this.c;
      this.b = +Math.sqrt(cc - aa).toFixed(1);
      return;
    }

    if (this.b!='b' && this.c!='c' && this.a==='a') {  
      const bb: number = this.b * this.b;
      const cc: number = this.c * this.c;
      this.a = +Math.sqrt(cc - bb).toFixed(1);
      return;
    }

    if (this.a!='a' && this.b!='b' && this.c!='c') {  
      return;
    }

    if (this.a==='a' && this.b==='b' && this.c==='c') {  
      return;
    }
  }
}
