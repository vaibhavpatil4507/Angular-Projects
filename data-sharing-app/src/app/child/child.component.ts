// import { Component, Input, OnInit } from '@angular/core';
import { Component, Output, OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

//   //Parent To Child
//  @Input() parantTitle:string='';
//  @Input() list:string[]=[];
//   constructor() { }



firstName:string;
lastName:string;
schoolName:string;


constructor(){
  this.firstName=" ";
  this.lastName=" ";
  this.schoolName=" ";
}




// //child-To-Parent
// @Output() sendfullName=new EventEmitter<string>();
// @Output() sendSchoolName=new EventEmitter<string>();

// submit():void{
//   let fullname=this.firstName+" "+this.lastName;
//   this.sendfullName.emit(fullname);
// }
// saveSchoolData():void{
// let Name=this.schoolName;
// this.sendSchoolName.emit(Name);
// }





ngOnInit(): void {}

}
