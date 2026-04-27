import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMinhaContaComponent } from './card-minha-conta.component';

describe('CardMinhaContaComponent', () => {
  let component: CardMinhaContaComponent;
  let fixture: ComponentFixture<CardMinhaContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMinhaContaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardMinhaContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
