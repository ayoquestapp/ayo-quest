import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplaEscolhaComponent } from './multipla-escolha.component';

describe('MultiplaEscolhaComponent', () => {
  let component: MultiplaEscolhaComponent;
  let fixture: ComponentFixture<MultiplaEscolhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiplaEscolhaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultiplaEscolhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
