import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentInfoComponent } from './student-info/student-info.component';



@NgModule({
  declarations: [
    StudentInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    StudentInfoComponent
  ]
})
export class Module3Module { }
