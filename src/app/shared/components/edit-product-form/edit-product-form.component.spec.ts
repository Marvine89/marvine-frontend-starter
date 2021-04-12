import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from '../../services/product/product.service';

import { EditProductFormComponent } from './edit-product-form.component';

describe('EditProductFormComponent', () => {
  let component: EditProductFormComponent;
  let fixture: ComponentFixture<EditProductFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditProductFormComponent],
      imports: [ReactiveFormsModule],
      providers: [
        {
          provide: ProductService,
          useValue: {}
        },
        {
          provide: MatSnackBar,
          useValue: { open: jasmine.createSpy() }
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
  expect(component).toBeTruthy();
});
});
