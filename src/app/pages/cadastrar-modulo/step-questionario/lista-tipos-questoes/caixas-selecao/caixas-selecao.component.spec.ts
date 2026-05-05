import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixasSelecaoComponent } from './caixas-selecao.component';

describe('CaixasSelecaoComponent', () => {
  let component: CaixasSelecaoComponent;
  let fixture: ComponentFixture<CaixasSelecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaixasSelecaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaixasSelecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
