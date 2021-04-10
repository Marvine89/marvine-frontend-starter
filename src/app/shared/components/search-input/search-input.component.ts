import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent extends FormControl {
  @Input() placeHolder: string = "Enter search text";
  @Input("value") value: string = "";
  @Output("onChange") inputChanged = new EventEmitter<string>();

  constructor() {
    super();
  }

  valueChanged(target?: any): void {
    const value = <HTMLTextAreaElement>target;
    this.inputChanged.emit(value.value);
  }
}
