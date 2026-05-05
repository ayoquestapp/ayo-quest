import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepConteudoComponent } from './step-conteudo.component';

describe('StepConteudoComponent', () => {
  let component: StepConteudoComponent;
  let fixture: ComponentFixture<StepConteudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepConteudoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
