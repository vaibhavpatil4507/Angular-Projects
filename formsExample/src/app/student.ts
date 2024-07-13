export class Student {

  firstname:string='';
  lastname:string=' ';
  email:string=' ';
  gender:string=' ';
  subject1:boolean;
  subject2:boolean;
  subject3:boolean;

 public constructor(firstname:string,lastname:string,email:string,gender:string,subject1:boolean,subject2:boolean,subject3:boolean){
    this.firstname=firstname;
    this.lastname=lastname;
    this.email=email;
    this.gender=gender;
    this.subject1=subject1;
    this.subject2=subject2;
    this.subject3=subject3;}
}
