import { Component } from '@angular/core';

@Component({
  selector: 'circle',
  standalone: true,
  imports: [],
  templateUrl: './circle.component.html',
  styleUrl: './circle.component.scss'
})
export class CircleComponent {
  R: number | 'R' = 'R';
  D: number | 'D' = 'D';
  C: number | 'C' = 'C';
  S: number | '?' = '?';

  setR(value: any) {
    const R = value.target.valueAsNumber;
    if (R===0) this.R = R;
    else this.R = R ? R : 'R';
  }
  setD(value: any) {
    const D = value.target.valueAsNumber;
    if (D===0) this.D = D;
    else this.D = D ? D : 'D';
  }
  setC(value: any) {
    const C = value.target.valueAsNumber;
    if (C===0) this.C = C;
    else this.C = C ? C : 'C';
  }
  setS(value: any) {
    const S = value.target.valueAsNumber;
    if (S===0) this.S = S;
    else this.S = S ? S : '?';
  }

  reset() {
    this.R = 'R';
    this.D = 'D';
    this.C = 'C';
    this.S = '?';
  }

  calculate() {
    if (this.R==='R' && this.D==='D' && this.C==='C' && this.S==='?') {  
      return;
    }
    if (this.R!='R' && this.D!='D' && this.C!='C' && this.S!='?') {  
      return;
    }

    if (this.R==='R') {
      if (this.S!='?') {
        this.R = +(Math.sqrt(this.S / Math.PI)).toFixed(1);
        this.C = +(2 * Math.PI * this.R).toFixed(1);
        this.D = +(Math.sqrt(this.S / Math.PI) * 2).toFixed(1);
        return;
      }
      if (this.C!='C'){
        this.R = +(this.C / (2 * Math.PI)).toFixed(1);
        this.S = +(Math.PI * this.R * this.R).toFixed(1);
        this.D = +(this.C / Math.PI).toFixed(1);
        return;
      }
      if (this.D!='D') {
        this.R = +(this.D / 2).toFixed(1);
        this.C = +(2 * Math.PI * this.R).toFixed(1);
        this.S = +(Math.PI * this.R * this.R).toFixed(1);
        return;
      }
    } else {
      this.D = this.R * 2;
      this.C = +(2 * Math.PI * this.R).toFixed(1);
      this.S = +(Math.PI * this.R * this.R).toFixed(1);
      return;
    }
  }
}
