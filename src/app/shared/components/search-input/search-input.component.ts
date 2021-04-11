import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit, OnDestroy {
  @Input() placeHolder: string = "Enter search text";
  @Input("value") value: string = "";
  @Output("onChange") inputChanged = new EventEmitter<string>();
  ngUnsubscribe: Subscription = new Subscription();
  valueChanged$: Subject<string> = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.ngUnsubscribe.add(
      this.valueChanged$.asObservable()
        .pipe(debounceTime(300))
        .subscribe((value) => {
          this.inputChanged.emit(value);
          console.log(value);
        })
    );
  }

  ngOnDestroy(): void {
    this.valueChanged$.complete();
    this.ngUnsubscribe.unsubscribe();
  }

  valueChanged(target?: any): void {
    const value = <HTMLTextAreaElement>target;
    this.emitValue(value.value)
  }

  emitValue(value: string = ""): void {
    this.valueChanged$.next(value);
  }

  clearSearch(): void {
    this.value = "";
    this.emitValue();
  }
}
