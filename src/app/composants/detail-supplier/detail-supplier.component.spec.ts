import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSupplierComponent } from './detail-supplier.component';

describe('DetailSupplierComponent', () => {
  let component: DetailSupplierComponent;
  let fixture: ComponentFixture<DetailSupplierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailSupplierComponent]
    });
    fixture = TestBed.createComponent(DetailSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
