import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BackButtonHeaderComponent } from './back-button-header.component';

@NgModule({
  declarations: [BackButtonHeaderComponent],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [BackButtonHeaderComponent],
})
export class BackButtonHeaderModule { }
