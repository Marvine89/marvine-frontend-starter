import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ErrorService } from '../error/error.service';
import { HttpService } from '../http/http.service';
import { UserService } from '../user/user.service';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        ProductService,
        {
          provide: HttpService,
          useValue: {}
        },
        {
          provide: ErrorService,
          useValue: {}
        },
        {
          provide: UserService,
          useValue: {}
        },
      ]
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
