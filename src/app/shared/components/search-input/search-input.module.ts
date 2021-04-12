import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { SearchInputComponent } from './search-input.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    SearchInputComponent
  ],
  imports: [
    MatInputModule,
    FormsModule,
    MatIconModule,
    CommonModule,
    MatButtonModule
  ],
  exports: [SearchInputComponent]
})
export class SearchInputModule { }
