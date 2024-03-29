import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentComponent } from './percent.component';

describe('PercentComponent', () => {
  let component: PercentComponent;
  let fixture: ComponentFixture<PercentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PercentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PercentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
