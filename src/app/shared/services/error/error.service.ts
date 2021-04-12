import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  constructor(private snackBar: MatSnackBar) { }

  showError(): Observable<never> {
    this.snackBar.open('An error has occured', 'Ok', {
      duration: 6000,
    });
    return EMPTY;
  }
}
