import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCmdCltComponent } from './detail-cmd-clt.component';

describe('DetailCmdCltComponent', () => {
  let component: DetailCmdCltComponent;
  let fixture: ComponentFixture<DetailCmdCltComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailCmdCltComponent]
    });
    fixture = TestBed.createComponent(DetailCmdCltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
