import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonTroiComponent } from './bouton-troi.component';

describe('BoutonTroiComponent', () => {
  let component: BoutonTroiComponent;
  let fixture: ComponentFixture<BoutonTroiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoutonTroiComponent]
    });
    fixture = TestBed.createComponent(BoutonTroiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
