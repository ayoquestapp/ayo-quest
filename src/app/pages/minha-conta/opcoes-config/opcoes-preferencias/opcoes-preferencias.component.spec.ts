import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcoesPreferenciasComponent } from './opcoes-preferencias.component';

describe('OpcoesPreferenciasComponent', () => {
  let component: OpcoesPreferenciasComponent;
  let fixture: ComponentFixture<OpcoesPreferenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpcoesPreferenciasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpcoesPreferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
