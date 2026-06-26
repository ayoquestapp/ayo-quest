import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepResponsavelComponent } from './step-responsavel.component';

describe('StepResponsavelComponent', () => {
  let component: StepResponsavelComponent;
  let fixture: ComponentFixture<StepResponsavelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepResponsavelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepResponsavelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
