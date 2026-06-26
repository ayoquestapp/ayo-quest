import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepConfiguracaoTurmaComponent } from './step-configuracao-turma.component';

describe('StepConfiguracaoTurmaComponent', () => {
  let component: StepConfiguracaoTurmaComponent;
  let fixture: ComponentFixture<StepConfiguracaoTurmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepConfiguracaoTurmaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepConfiguracaoTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
