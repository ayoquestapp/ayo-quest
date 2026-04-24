import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyoQuestComponent } from './ayo-quest.component';

describe('AyoQuestComponent', () => {
  let component: AyoQuestComponent;
  let fixture: ComponentFixture<AyoQuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AyoQuestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AyoQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
