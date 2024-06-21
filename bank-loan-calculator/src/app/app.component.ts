import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loanAmount:number;
  loanTenure:number;
  interestRate:number;
  monthlyEMI:number;
  simpleInterest:number;
  totalAmount:number;
  count:number;


  constructor(){
    this.loanAmount=5000;
    this.loanTenure=2;
    this.interestRate=8.5;
    this.simpleInterest=(this.loanAmount*this.loanTenure*this.interestRate)/100;
    this.totalAmount=(this.simpleInterest+this.loanAmount);
    this.monthlyEMI=this.totalAmount/(this.loanTenure*12)
    this.count=0;
  }

  doCalculation(){
    this.simpleInterest=(this.loanAmount*this.loanTenure*this.interestRate)/100;
    this.totalAmount=this.simpleInterest+this.loanAmount;
    this.monthlyEMI=this.totalAmount/(this.loanTenure*12)
  }

  updateCounter(type:string){
       if(type=='plus'){
   this.count++;
}
else{
  this.count--;
}
  }
}
