import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCmdCltComponent } from './page-cmd-clt.component';

describe('PageCmdCltComponent', () => {
  let component: PageCmdCltComponent;
  let fixture: ComponentFixture<PageCmdCltComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCmdCltComponent]
    });
    fixture = TestBed.createComponent(PageCmdCltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
