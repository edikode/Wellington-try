import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPageTwoComponent } from './signup-page-two.component';

describe('SignupPageTwoComponent', () => {
  let component: SignupPageTwoComponent;
  let fixture: ComponentFixture<SignupPageTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupPageTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
