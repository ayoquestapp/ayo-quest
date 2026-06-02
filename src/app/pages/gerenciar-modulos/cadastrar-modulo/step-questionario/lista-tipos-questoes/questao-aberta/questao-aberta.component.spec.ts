import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestaoAbertaComponent } from './questao-aberta.component';

describe('QuestaoAbertaComponent', () => {
  let component: QuestaoAbertaComponent;
  let fixture: ComponentFixture<QuestaoAbertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestaoAbertaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestaoAbertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
