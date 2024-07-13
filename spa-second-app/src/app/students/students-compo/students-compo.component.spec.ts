import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsCompoComponent } from './students-compo.component';

describe('StudentsCompoComponent', () => {
  let component: StudentsCompoComponent;
  let fixture: ComponentFixture<StudentsCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsCompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
