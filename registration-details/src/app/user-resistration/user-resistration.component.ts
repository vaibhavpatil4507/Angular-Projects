import { User } from './models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-resistration',
  templateUrl: './user-resistration.component.html',
  styleUrls: ['./user-resistration.component.css']
})
export class UserResistrationComponent {
fName:string='';
emailId:string='';
pwd:string='';
Contact:string='';
address:string='';
line1:string='';
line2:string='';
pin:number=0;
isActiveButton:boolean=true;
isDisactiveButton:boolean=false;

userData:User[]=[];

constructor() { }

saveData():void{
  let userObj = {
    fullName:this.fName,
    email:this.emailId,
    password:this.pwd,
    cellNumber:this.Contact,
    address:{
      line1:this.line1,
      line2:this.line2,
      pin:this.pin
  }
} as User;
  this.userData.push(userObj);
  // console.log(this.userData)
  this.defaultValue();
}

defaultValue():void{
this.fName='';
this.emailId='';
this.pwd='';
this.Contact='';
this.address='';
this.line1='';
this.line2='';
this.pin=0;
}


updateData():void{
let updatedObject:User={
  fullName:this.fName,
  email:this.emailId,
  password:this.pwd,
  cellNumber:this.Contact,
  address:{
    line1:this.line1,
    line2:this.line2,
    pin:this.pin
  }
}

for(let i=0; i< this.userData.length;i++){
  if(this.userData[i].email==this.emailId){
      this.userData[i]=updatedObject;

  }

    this.isActiveButton=true;
    this.isDisactiveButton=false;
    this.defaultValue();
    break;
}
}


updateRecord(user:User):void{
this.fName=user.fullName;
this.emailId=user.email;
this.pwd=user.password;
this.Contact=user.cellNumber;
this.line1=user.address.line1;
this.line2=user.address.line2;
this.pin=user.address.pin;

this.isActiveButton=false;
this.isDisactiveButton=true;
}

removeData(mailID:string):void{
  let updatedArray:User[]=[];

  for(let i=0;i<this.userData.length;i++){
    if(this.userData[i].email!=mailID){
      updatedArray.push(this.userData[i]);
    }
  }
  this.userData=updatedArray;
}


}
