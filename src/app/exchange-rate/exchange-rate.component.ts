import { Component } from '@angular/core';

@Component({
  selector: 'exchange-rate',
  standalone: true,
  imports: [],
  templateUrl: './exchange-rate.component.html',
  styleUrl: './exchange-rate.component.scss'
})
export class ExchangeRateComponent {
  providers: string[] = ['cledara', 'unknown', 'api-ninjas'];
  currencies:  string[] = ['USD', 'EUR', 'GBP', 'CNY', 'UAH', 'PLN'];

  provider: string = 'cledara';

  currency1: string = 'USD';
  currency2: string = 'EUR';

  amount1: number | undefined;
  amount2: number | undefined;

  url: string = '';
  head: any | undefined;

  setProvider(event: any) {
    this.provider = event.target.value;
    this.calculateFrom1();
  }

  setCurrency1(event: any) {
    this.currency1 = event.target.value;
    this.calculateFrom1();
  }

  setCurrency2(event: any) {
    this.currency2 = event.target.value;
    this.calculateFrom1();
  }

  setAmout1(event: any) {
    this.amount2 = 0;
    const value = event.target.valueAsNumber;
    if (value===0) this.amount1 = value;
    else this.amount1 = value ? value : undefined;
    this.calculateFrom1();
  }

  setAmout2(event: any) {
    this.amount1 = 0;
    const value = event.target.valueAsNumber;
    if (value===0) this.amount2 = value;
    else this.amount2 = value ? value : undefined;
    this.calculateFrom2();
  }

  calculateFrom1() {
    this.calculate(
      this.currency1, this.currency2,
      this.amount1, 
      (value: number | undefined) => this.amount2=value
    );
  }

  calculateFrom2() {
    this.calculate(
      this.currency2, this.currency1,
      this.amount2, 
      (value: number | undefined) => this.amount1=value
    );
  }

  reset() {
    this.provider = 'cledara';

    this.currency1 = 'USD';
    this.currency2 = 'EUR';

    this.amount1 = undefined;
    this.amount2 = undefined;
  }
  
  calculate(from: string, to: string, amount: number | undefined, result: any) {
    if (amount===0) {
      result(amount);
      return;
    }
    if (!amount) {
      result(undefined);
      return;
    }

    switch (this.provider) {
      case 'cledara':
        const myHeaders = new Headers();
        myHeaders.append("apikey", "6hpKZxNazavfnQSo2e2pkyEbCFkiZhkQ");

        this.url = `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`;
        this.head = {
          method: 'GET',
          redirect: 'follow',
          headers: myHeaders
        };
        break;
        
      case 'unknown':
        this.url = `https://currency-exchange.p.rapidapi.com/exchange?from=${from}&to=${to}&q=${amount}`;
        this.head = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '619624cca8msh0c9a9a85b5368a3p137753jsnbf1583a2183a',
            'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
          }
        };
        break;
        
      case 'api-ninjas':
        this.url = `https://urrency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${from}&want=${to}&amount=${amount}`;
        this.head = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '619624cca8msh0c9a9a85b5368a3p137753jsnbf1583a2183a',
            'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
          }
        };
        break;
      
      default:
        break;
    }
    
    fetch(this.url, this.head) 
    .then(res => res.json())
    .then(res => {
      switch (this.provider) {
        case 'cledara':
          result(res.result.toFixed(2));
          break;
        case 'unknown':
          result(res.toFixed(2));
          break;
        case 'api-ninjas':
          result(res.new_amount.toFixed(2));
          break;
      
        default:
          result(0);
          break;
      }
    })
    .catch(error => {
      result = 0;
    });
  }
}
