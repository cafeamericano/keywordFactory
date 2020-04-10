import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllKeywordsComponent } from './all-keywords.component';

describe('AllKeywordsComponent', () => {
  let component: AllKeywordsComponent;
  let fixture: ComponentFixture<AllKeywordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllKeywordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllKeywordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
