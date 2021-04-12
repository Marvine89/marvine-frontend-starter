import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IProduct } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.scss']
})
export class EditProductFormComponent {
  @Input() defaultValue?: IProduct;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  formData: FormGroup;
  submitting: boolean = false;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private snackBar: MatSnackBar) {
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

  submitForm(): void {
    if (this.defaultValue) {
      this.submitting = true;
      this.productService.updateProduct(this.defaultValue.id, { ...this.defaultValue, ...this.formData.value })
        .subscribe(() => {
          this.submitting = false;
          this.snackBar.open('Product edited successfully', "Ok", { duration: 3000 });
          this.close.emit();
        }, () => this.submitting = false);
    }
  }

}
