import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './components/shopping-cart.component';
import { RouterModule } from '@angular/router';
import { routes } from './shopping-cart.routes';
import { MaterialModule } from 'src/app/material.module';
import { BackButtonHeaderModule } from 'src/app/shared/components/back-button-header/back-button-header.module';
@NgModule({
  declarations: [
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BackButtonHeaderModule,
    RouterModule.forChild(routes),
  ]
})
export class ShoppingCartModule { }
