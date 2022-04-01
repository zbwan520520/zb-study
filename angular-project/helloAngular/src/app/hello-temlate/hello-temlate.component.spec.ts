import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloTemlateComponent } from './hello-temlate.component';

describe('HelloTemlateComponent', () => {
  let component: HelloTemlateComponent;
  let fixture: ComponentFixture<HelloTemlateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloTemlateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloTemlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
