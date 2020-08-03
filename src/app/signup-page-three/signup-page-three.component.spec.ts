import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPageThreeComponent } from './signup-page-three.component';

describe('SignupPageThreeComponent', () => {
  let component: SignupPageThreeComponent;
  let fixture: ComponentFixture<SignupPageThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupPageThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
