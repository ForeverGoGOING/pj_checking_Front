import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternsIntroductionComponent } from './patterns-introduction.component';

describe('PatternsIntroductionComponent', () => {
  let component: PatternsIntroductionComponent;
  let fixture: ComponentFixture<PatternsIntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatternsIntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternsIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
