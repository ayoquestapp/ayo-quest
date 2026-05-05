import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepQuestionarioComponent } from './step-questionario.component';

describe('StepQuestionarioComponent', () => {
  let component: StepQuestionarioComponent;
  let fixture: ComponentFixture<StepQuestionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepQuestionarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepQuestionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
