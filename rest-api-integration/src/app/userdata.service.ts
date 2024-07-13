import { Injectable } from '@angular/core';
import { User } from './Models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

userList:User[]=[];

id=0;
name=" ";
age=0;

getData():void{
  let userObject:User={
    id:this.id,
    name:this.name,
    age:this.age
  }
  this.userList.push(userObject);
  this.defaultData();
}

defaultData():void{
  this.id=0;
  this.name=" ";
  this.age=0;
}


  constructor() { }
}
