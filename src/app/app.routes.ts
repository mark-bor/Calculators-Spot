import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ExchangeRateComponent } from './exchange-rate/exchange-rate.component';
import { PercentComponent } from './percent/percent.component';
import { InvestmentsComponent } from './investments/investments.component';

import { QuadraticEquationComponent } from './quadratic-equation/quadratic-equation.component';
import { PythagoreanTheoremComponent } from './pythagorean-theorem/pythagorean-theorem.component';
import { CircleComponent } from './circle/circle.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, title: 'Home page'},

    {path: 'exchange-rate', component: ExchangeRateComponent, title: 'Exchange rate page'},
    {path: 'percent', component: PercentComponent, title: 'Investment page'},
    {path: 'investments', component: InvestmentsComponent, title: 'Investments page'},

    {path: 'quadratic-equation', component: QuadraticEquationComponent, title: 'Quadratic equation page'},
    {path: 'pythagorean-theorem', component: PythagoreanTheoremComponent, title: 'Pythagorean theorem page'},
    {path: 'circle', component: CircleComponent, title: 'Circle page'},
];
