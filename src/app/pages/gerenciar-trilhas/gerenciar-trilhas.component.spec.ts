import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarTrilhasComponent } from './gerenciar-trilhas.component';

describe('GerenciarTrilhasComponent', () => {
  let component: GerenciarTrilhasComponent;
  let fixture: ComponentFixture<GerenciarTrilhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciarTrilhasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GerenciarTrilhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
