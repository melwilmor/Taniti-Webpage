import { Routes } from '@angular/router';
import { Travel } from './travel/travel';
import { Stay } from './stay/stay';
import { Enjoy } from './enjoy/enjoy';
import { Eat } from './eat/eat';
import { Home } from './home/home';
import { Faqs } from './faqs/faqs';



export const routes: Routes = [
    { path: '', component: Home },
    { path: 'eat', component: Eat },
    { path: 'enjoy', component: Enjoy },
    { path: 'stay', component: Stay },
    { path: 'travel', component: Travel},
    { path: 'faqs', component: Faqs }
];
