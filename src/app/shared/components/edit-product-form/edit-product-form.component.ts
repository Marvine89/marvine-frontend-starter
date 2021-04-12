import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IContactForm } from '../../interfaces/product.interface';

@Component({
  selector: 'app-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.scss']
})
export class EditProductFormComponent {
  formData: FormGroup;
  @Input() defaultValue?: IContactForm;
  @Input() buttonTitle: string = 'Update contact';
  @Input() submitting: boolean = false;
  @Input() showDelete: boolean = false;
  @Output() submitData: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.formData = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(7)]],
    });
  }

  ngOnChanges() {
    if (this.defaultValue) {
      this.formData.setValue({
        name: this.defaultValue.name || '',
        price: this.defaultValue.price || '',
        description: this.defaultValue.description || '',
      });
    }
  }

  submitForm(): void { }

}
