import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcoesPerfilComponent } from './opcoes-perfil.component';

describe('OpcoesPerfilComponent', () => {
  let component: OpcoesPerfilComponent;
  let fixture: ComponentFixture<OpcoesPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpcoesPerfilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpcoesPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
