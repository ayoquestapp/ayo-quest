import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepDadosBasicosComponent } from './step-dados-basicos.component';

describe('StepDadosBasicosComponent', () => {
  let component: StepDadosBasicosComponent;
  let fixture: ComponentFixture<StepDadosBasicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepDadosBasicosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepDadosBasicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
