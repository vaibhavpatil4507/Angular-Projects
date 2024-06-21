import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fname:string;
  lname:string;
  schoolName:String="Sri shivaji vidyalay Mahagaon"
  emailId:string="vaibhav87@gmail.com"

  constructor(){
    this.fname="Radha";
    this.lname="patil";
  }

  showAlert():void{
    alert("This is click event")
  }

  showMsg(massege:string):void{
    console.log(massege)
  }

  keyUpEvent(info:string):void{
    console.log(info);
  }

  blurEventListner(showInfow:string):void{
    console.log(showInfow);
  }

  overEvent():void{
    console.log("Mouse Over Event");
  }

}
