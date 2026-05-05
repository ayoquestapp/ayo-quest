import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepRevisarComponent } from './step-revisar.component';

describe('StepRevisarComponent', () => {
  let component: StepRevisarComponent;
  let fixture: ComponentFixture<StepRevisarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepRevisarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepRevisarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
