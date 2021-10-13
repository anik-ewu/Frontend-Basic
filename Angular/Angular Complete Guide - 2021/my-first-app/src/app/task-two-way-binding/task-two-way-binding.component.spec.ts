import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTwoWayBindingComponent } from './task-two-way-binding.component';

describe('TaskTwoWayBindingComponent', () => {
  let component: TaskTwoWayBindingComponent;
  let fixture: ComponentFixture<TaskTwoWayBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskTwoWayBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskTwoWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
