import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProduct1Component } from './add-product1.component';

describe('AddProduct1Component', () => {
  let component: AddProduct1Component;
  let fixture: ComponentFixture<AddProduct1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProduct1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProduct1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
