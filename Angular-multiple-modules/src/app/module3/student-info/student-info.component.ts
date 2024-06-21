import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent  {

  name:String;
  age:Number;
  School:String;

  constructor() {
    this.name="keshav";
    this.age=45;
    this.School="Sri Mahatma Vidyalay,Gurumauli"
   }
}
