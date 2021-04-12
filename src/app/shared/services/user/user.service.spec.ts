import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ErrorService } from '../error/error.service';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        UserService,
        { provide: ErrorService, useValue: { showError: jasmine.createSpy() } }
      ]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
