import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulosStepperComponent } from './modulos-stepper.component';

describe('ModulosStepperComponent', () => {
  let component: ModulosStepperComponent;
  let fixture: ComponentFixture<ModulosStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModulosStepperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModulosStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
