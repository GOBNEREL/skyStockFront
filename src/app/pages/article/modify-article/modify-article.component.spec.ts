import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyArticleComponent } from './modify-article.component';

describe('ModifyArticleComponent', () => {
  let component: ModifyArticleComponent;
  let fixture: ComponentFixture<ModifyArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyArticleComponent]
    });
    fixture = TestBed.createComponent(ModifyArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
