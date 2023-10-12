import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCmdFrsComponent } from './page-cmd-frs.component';

describe('PageCmdFrsComponent', () => {
  let component: PageCmdFrsComponent;
  let fixture: ComponentFixture<PageCmdFrsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCmdFrsComponent]
    });
    fixture = TestBed.createComponent(PageCmdFrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
