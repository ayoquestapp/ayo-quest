import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoQuestaoComponent } from './tipo-questao.component';

describe('TipoQuestaoComponent', () => {
  let component: TipoQuestaoComponent;
  let fixture: ComponentFixture<TipoQuestaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoQuestaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipoQuestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
