import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { UserService } from 'src/app/shared/services/user/user.service';

import { ShoppingCartComponent } from './shopping-cart.component';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingCartComponent],
      providers: [
        {
          provide: CartService,
          useValue: {
            fetchCartProducts: jasmine.createSpy().and.returnValue(of([]))
          }
        },
        {
          provide: UserService,
          useValue: {
            getUserId: 'FAKE-USER-ID'
          }
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
