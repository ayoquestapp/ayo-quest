import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarTrilhaComponent } from './cadastrar-trilha.component';

describe('CadastrarTrilhaComponent', () => {
  let component: CadastrarTrilhaComponent;
  let fixture: ComponentFixture<CadastrarTrilhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarTrilhaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastrarTrilhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
