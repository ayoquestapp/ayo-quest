import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerdadeiroFalsoComponent } from './verdadeiro-falso.component';

describe('VerdadeiroFalsoComponent', () => {
  let component: VerdadeiroFalsoComponent;
  let fixture: ComponentFixture<VerdadeiroFalsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerdadeiroFalsoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerdadeiroFalsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
