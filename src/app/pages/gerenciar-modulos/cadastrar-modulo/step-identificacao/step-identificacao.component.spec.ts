import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepIdentificacaoComponent } from './step-identificacao.component';

describe('StepIdentificacaoComponent', () => {
  let component: StepIdentificacaoComponent;
  let fixture: ComponentFixture<StepIdentificacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepIdentificacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepIdentificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
