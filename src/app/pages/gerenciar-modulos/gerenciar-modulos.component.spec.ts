import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarModulosComponent } from './gerenciar-modulos.component';

describe('GerenciarModulosComponent', () => {
  let component: GerenciarModulosComponent;
  let fixture: ComponentFixture<GerenciarModulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciarModulosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GerenciarModulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
