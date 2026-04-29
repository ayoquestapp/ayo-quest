import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcoesConquistasComponent } from './opcoes-conquistas.component';

describe('OpcoesConquistasComponent', () => {
  let component: OpcoesConquistasComponent;
  let fixture: ComponentFixture<OpcoesConquistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpcoesConquistasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpcoesConquistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
