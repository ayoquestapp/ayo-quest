import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreencherQuestaoComponent } from './preencher-questao.component';

describe('PreencherQuestaoComponent', () => {
  let component: PreencherQuestaoComponent;
  let fixture: ComponentFixture<PreencherQuestaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreencherQuestaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreencherQuestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
