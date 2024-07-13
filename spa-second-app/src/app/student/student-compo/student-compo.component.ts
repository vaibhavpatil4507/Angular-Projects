import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/studentData-model';
import { StudentServicesService } from 'src/app/student-services.service';

@Component({
  selector: 'app-student-compo',
  templateUrl: './student-compo.component.html',
  styleUrls: ['./student-compo.component.css']
})
export class StudentCompoComponent  {

  rollNumber:any='';
  firstName:string='';
  lastName:string='';
  age:number=0;
  gender:string='';
  schoolName:string='';

  listOfStudents:Student[]=[];


  constructor(private routeInfo:ActivatedRoute ,private studentService:StudentServicesService) {
    this.rollNumber=this.routeInfo.snapshot.paramMap.get("id");
     this.listOfStudents=this.studentService.getListOfStudData();
    this.printStudentData();
   }

   public printStudentData():void{
    for(let i=0;this.listOfStudents.length;i++){
      if(this.listOfStudents[i].rollNumber==this.rollNumber){
        this.firstName=this.listOfStudents[i].firstName;
        this.lastName=this.listOfStudents[i].lastName;
        this.age=this.listOfStudents[i].age;
        this.gender=this.listOfStudents[i].gender;
        this.schoolName=this.listOfStudents[i].schoolName;
        break;
      }
    }
   }

   UpdateData():void{
    let updatedObject:Student={
        rollNumber:this.rollNumber,
        firstName:this.firstName,
        lastName:this.lastName,
        age:this.age,
        gender:this.gender,
        schoolName:this.schoolName
      }

      for(let i=0;this.listOfStudents.length;i++){
        if(this.listOfStudents[i].rollNumber==this.rollNumber){
          this.listOfStudents[i]=updatedObject;
          alert("data is updated");
          break;
        }
      }

   }

}

