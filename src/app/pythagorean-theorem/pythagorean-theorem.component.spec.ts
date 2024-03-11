import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythagoreanTheoremComponent } from './pythagorean-theorem.component';

describe('PythagoreanTheoremComponent', () => {
  let component: PythagoreanTheoremComponent;
  let fixture: ComponentFixture<PythagoreanTheoremComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PythagoreanTheoremComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PythagoreanTheoremComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
