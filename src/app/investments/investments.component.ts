import { Component } from '@angular/core';

@Component({
  selector: 'investments',
  standalone: true,
  imports: [],
  templateUrl: './investments.component.html',
  styleUrl: './investments.component.scss'
})
export class InvestmentsComponent {
  amount: number | '?' = '?';
  interest: number | undefined;
  pointsNumber: number | '?' = '?';
  additionalAmount: number | '?' = '?';
  result: number | '?' = '?';

  pointName: 'year' | 'month' = 'year';
  points: number[] = [];

  diagram: boolean = false;

  upperFirstLetter(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  setAmount(value: any) {
    const amount = value.target.valueAsNumber;
    if (amount===0) this.amount = amount;
    else this.amount = amount ? amount : '?';
  }
  setInterest(value: any) {
    const interest = value.target.valueAsNumber;
    if (interest===0) this.interest = interest;
    else this.interest = interest ? interest : undefined;
  }
  setPointsNumber(value: any) {
    const pointsNumber = value.target.valueAsNumber;
    if (pointsNumber===0) this.pointsNumber = pointsNumber;
    else this.pointsNumber = pointsNumber ? pointsNumber : '?';
  }
  setAdditionalAmount(value: any) {
    const additionalAmount = value.target.valueAsNumber;
    if (additionalAmount===0) this.additionalAmount = additionalAmount;
    else this.additionalAmount = additionalAmount ? additionalAmount : '?';
  }
  // setResult(value: any) {
  //   const result = value.target.valueAsNumber;
  //   if (result===0) this.result = result;
  //   else this.result = result ? result : '?';
  // }

  setPointName(name: 'year' | 'month') {
    this.pointName = name;
  }

  reset() {
    this.amount = '?';
    this.interest = undefined;
    this.pointsNumber = '?';
    this.result = '?';
    this.points = [];
  }

  calculate() {
    this.result = '?';
    this.points = [];

    if (this.amount!='?' && this.interest && this.pointsNumber!='?') {
      const first = 1 + ((this.interest * 0.01) / 12);
      const second = 12 * this.pointsNumber;
      const third = first ** second;
      this.result = +(this.amount * third).toFixed(0);

      if (this.additionalAmount!='?') {
        // for (let i = 0; i < this.pointsNumber; i++) {
        //   let res: number;
        //   if (i===0) res = +(this.amount + (this.amount * this.interest) / 100 + this.additionalAmount).toFixed(0);
        //   else res = +(this.points[i-1] + (this.points[i-1] * this.interest) / 100 + this.additionalAmount).toFixed(0);
        //   this.points.push(res)
        // }
      }
      else {
        for (let i = 0; i < this.pointsNumber; i++) {
          let res: number;
          if (i===0) res = +(this.amount + (this.amount * this.interest) / 100).toFixed(0);
          else res = +(this.points[i-1] + (this.points[i-1] * this.interest) / 100).toFixed(0);
          this.points.push(res)
        }
      }

      // if (this.interest && this.result!='?') {
      // }
    }
  }
}
