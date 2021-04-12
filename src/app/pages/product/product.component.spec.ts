import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { UserService } from 'src/app/shared/services/user/user.service';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: Location,
          useValue: {
            back: jasmine.createSpy()
          }
        },
        {
          provide: ProductService,
          useValue: {
            fetchProduct: jasmine.createSpy().and.returnValue(of({}))
          }
        },
        {
          provide: CartService,
          useValue: {}
        },
        {
          provide: UserService,
          useValue: {}
        },
        {
          provide: MatSnackBar,
          useValue: {
            open: jasmine.createSpy()
          }
        },
        {
          provide: MatDialog,
          useValue: {
            open: jasmine.createSpy()
          }
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
