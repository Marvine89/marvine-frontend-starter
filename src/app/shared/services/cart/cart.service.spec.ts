import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ErrorService } from '../error/error.service';
import { HttpService } from '../http/http.service';
import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        CartService,
        {
          provide: HttpService,
          useValue: {}
        },
        {
          provide: ErrorService,
          useValue: {}
        },
      ]
    });
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
