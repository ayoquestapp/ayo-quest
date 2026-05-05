import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarModuloComponent } from './cadastrar-modulo.component';

describe('CadastrarModuloComponent', () => {
  let component: CadastrarModuloComponent;
  let fixture: ComponentFixture<CadastrarModuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarModuloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastrarModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
