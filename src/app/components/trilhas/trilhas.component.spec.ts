import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrilhasComponent } from './trilhas.component';

describe('TrilhasComponent', () => {
  let component: TrilhasComponent;
  let fixture: ComponentFixture<TrilhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrilhasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrilhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
