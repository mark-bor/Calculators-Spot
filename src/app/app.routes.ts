import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ExchangeRateComponent } from './exchange-rate/exchange-rate.component';
import { PercentComponent } from './percent/percent.component';
import { InvestmentsComponent } from './investments/investments.component';

import { QuadraticEquationComponent } from './quadratic-equation/quadratic-equation.component';
import { PythagoreanTheoremComponent } from './pythagorean-theorem/pythagorean-theorem.component';
import { CircleComponent } from './circle/circle.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, title: 'Calculators Spot'},

    {path: 'exchange-rate', component: ExchangeRateComponent, title: 'Calculators Spot | Exchange Rate'},
    {path: 'percent', component: PercentComponent, title: 'Calculators Spot | Investment'},
    {path: 'investments', component: InvestmentsComponent, title: 'Calculators Spot | Investments'},

    {path: 'quadratic-equation', component: QuadraticEquationComponent, title: 'Calculators Spot | Quadratic Equation'},
    {path: 'pythagorean-theorem', component: PythagoreanTheoremComponent, title: 'Calculators Spot | Pythagorean Theorem'},
    {path: 'circle', component: CircleComponent, title: 'Calculators Spot | Circle'},
];
