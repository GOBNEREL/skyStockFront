import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSupplierComponent } from './page-supplier.component';

describe('PageSupplierComponent', () => {
  let component: PageSupplierComponent;
  let fixture: ComponentFixture<PageSupplierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageSupplierComponent]
    });
    fixture = TestBed.createComponent(PageSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
