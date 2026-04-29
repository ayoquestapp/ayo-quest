import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcoesNotificacoesComponent } from './opcoes-notificacoes.component';

describe('OpcoesNotificacoesComponent', () => {
  let component: OpcoesNotificacoesComponent;
  let fixture: ComponentFixture<OpcoesNotificacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpcoesNotificacoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpcoesNotificacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
