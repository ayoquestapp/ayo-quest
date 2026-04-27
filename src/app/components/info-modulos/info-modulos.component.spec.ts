import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoModulosComponent } from './info-modulos.component';

describe('InfoModulosComponent', () => {
  let component: InfoModulosComponent;
  let fixture: ComponentFixture<InfoModulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoModulosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoModulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
