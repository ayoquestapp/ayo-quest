import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarEmailTemplateComponent } from './verificar-email-template.component';

describe('VerificarEmailTemplateComponent', () => {
  let component: VerificarEmailTemplateComponent;
  let fixture: ComponentFixture<VerificarEmailTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerificarEmailTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerificarEmailTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
