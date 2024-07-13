import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/studentData-model';
import { StudentServicesService } from 'src/app/student-services.service';

@Component({
  selector: 'app-students-compo',
  templateUrl: './students-compo.component.html',
  styleUrls: ['./students-compo.component.css']
})
export class StudentsCompoComponent implements OnInit {

  listOfStudent:Student[]=[];


  constructor(private studentService:StudentServicesService) {
    this.listOfStudent=studentService.getListOfStudData();
  }

  ngOnInit(): void {
  }

}
