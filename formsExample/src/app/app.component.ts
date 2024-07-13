import { Student } from './student';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

     studentObject:Student=new Student("rashika","mahajan","rasika@gmail.com","female",true,false,true);

  }






