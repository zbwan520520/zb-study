import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloFaChildComponent } from './hello-fa-child.component';

describe('HelloFaChildComponent', () => {
  let component: HelloFaChildComponent;
  let fixture: ComponentFixture<HelloFaChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloFaChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloFaChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
