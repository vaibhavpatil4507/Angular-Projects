import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentCompoComponent } from './add-student-compo.component';

describe('AddStudentCompoComponent', () => {
  let component: AddStudentCompoComponent;
  let fixture: ComponentFixture<AddStudentCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStudentCompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
