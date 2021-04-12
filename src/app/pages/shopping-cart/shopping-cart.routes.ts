import { Routes } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart.component';

export const routes: Routes = [
  { path: '', component: ShoppingCartComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];
