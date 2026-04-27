import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcoesConfigComponent } from './opcoes-config.component';

describe('OpcoesConfigComponent', () => {
  let component: OpcoesConfigComponent;
  let fixture: ComponentFixture<OpcoesConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpcoesConfigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpcoesConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
