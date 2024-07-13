import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/studentData-model';
import { StudentServicesService } from 'src/app/student-services.service';

@Component({
  selector: 'app-add-student-compo',
  templateUrl: './add-student-compo.component.html',
  styleUrls: ['./add-student-compo.component.css']
})
export class AddStudentCompoComponent implements OnInit {

  listOfStudent:Student[]=[];
  rollNumber:number=0;
  firstName:string='';
  lastName:string='';
  age:number=0;
  gender:string='';
  schoolName:string='';

  constructor(private studentService:StudentServicesService) {
        this.listOfStudent=studentService.listOfStudent;
  }

  insertData():void{
    let student={
      rollNumber:this.rollNumber,
      firstName:this.firstName,
      lastName:this.lastName,
      age:this.age,
      gender:this.gender,
      schoolName:this.schoolName
    }
    this.listOfStudent.push(student)
    this.defaultData();
  }

  defaultData():void{
    this.rollNumber=0;
    this.firstName='';
    this.lastName='';
    this.age=0;
    this.gender='';
    this.schoolName='';
  }


  ngOnInit(): void {
  }

}
