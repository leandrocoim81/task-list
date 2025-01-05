import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusTaskComponent } from './status-task.component';

describe('StatusTaskComponent', () => {
  let component: StatusTaskComponent;
  let fixture: ComponentFixture<StatusTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
