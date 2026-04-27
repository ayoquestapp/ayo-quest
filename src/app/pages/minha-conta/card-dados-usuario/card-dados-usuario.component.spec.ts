import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDadosUsuarioComponent } from './card-dados-usuario.component';

describe('CardDadosUsuarioComponent', () => {
  let component: CardDadosUsuarioComponent;
  let fixture: ComponentFixture<CardDadosUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDadosUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardDadosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
