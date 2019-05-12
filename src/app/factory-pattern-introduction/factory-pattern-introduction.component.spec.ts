import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryPatternIntroductionComponent } from './factory-pattern-introduction.component';

describe('FactoryPatternIntroductionComponent', () => {
  let component: FactoryPatternIntroductionComponent;
  let fixture: ComponentFixture<FactoryPatternIntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactoryPatternIntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryPatternIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
