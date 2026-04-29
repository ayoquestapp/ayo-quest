import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcoesFavoritosComponent } from './opcoes-favoritos.component';

describe('OpcoesFavoritosComponent', () => {
  let component: OpcoesFavoritosComponent;
  let fixture: ComponentFixture<OpcoesFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpcoesFavoritosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpcoesFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
