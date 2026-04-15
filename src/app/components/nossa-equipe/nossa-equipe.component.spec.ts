import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NossaEquipeComponent } from './nossa-equipe.component';

describe('NossaEquipeComponent', () => {
  let component: NossaEquipeComponent;
  let fixture: ComponentFixture<NossaEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NossaEquipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NossaEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
