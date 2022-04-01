import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloStyleSelectComponent } from './hello-style-select.component';

describe('HelloStyleSelectComponent', () => {
  let component: HelloStyleSelectComponent;
  let fixture: ComponentFixture<HelloStyleSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloStyleSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloStyleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
