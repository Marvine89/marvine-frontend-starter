import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '../../services/user/user.service';

import { FooterButtonsComponent } from './footer-buttons.component';

describe('FooterButtonsComponent', () => {
  let component: FooterButtonsComponent;
  let fixture: ComponentFixture<FooterButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterButtonsComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: UserService,
          useValue: {
            checkUserType: "FAKE-USER-TYPE"
          }
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
