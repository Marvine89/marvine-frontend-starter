import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
})
export class MaterialModule { }
