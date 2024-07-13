import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCompoComponent } from './student-compo.component';

describe('StudentCompoComponent', () => {
  let component: StudentCompoComponent;
  let fixture: ComponentFixture<StudentCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentCompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
