import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { ProductService } from '../../services/product/product.service';
import { UserService } from '../../services/user/user.service';

import { ProductCardComponent } from './product-card.component';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCardComponent],
      providers: [
        {
          provide: UserService,
          useValue: { checkUserType: 'FAKE-USER-ID' }
        },
        {
          provide: MatSnackBar,
          useValue: { open: jasmine.createSpy() }
        },
        {
          provide: MatDialog,
          useValue: { open: jasmine.createSpy().and.returnValue(of("delete")) }
        },
        {
          provide: ProductService,
          useValue: { deleteProduct: jasmine.createSpy() }
        },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    component.product = {} as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
