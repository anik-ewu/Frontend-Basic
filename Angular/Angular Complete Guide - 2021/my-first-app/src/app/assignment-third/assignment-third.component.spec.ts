import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentThirdComponent } from './assignment-third.component';

describe('AssignmentThirdComponent', () => {
  let component: AssignmentThirdComponent;
  let fixture: ComponentFixture<AssignmentThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentThirdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
