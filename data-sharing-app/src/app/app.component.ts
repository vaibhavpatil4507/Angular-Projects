import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { OutsideComponent } from './outside/outside.component';
import { UserDataService } from './user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // //Parent To Child
  // title:string="Color List"
  // colorList:string[]=["orange","pink","Green","white"]
  // //Now here,colorList is going to share their child component using @Input() directive
  // pushData(color:string){
  //     this.colorList.push(color);
  // }



  // //child-To- Parent using @Output
  // fullNameParent:string='';
  // schoolName:string='';

  // getFullName(name:string){
  //   this.fullNameParent=name;
  // }

  // getSchoolName(school:string){
  //   this.schoolName=school;
  // }


  //outside component

  outsideData:string='';
  prefexData:string='';

   @ViewChild('app-outside') child:OutsideComponent=new OutsideComponent();

    constructor(private service:UserDataService){
      this.outsideData=this.child.sendData();
       this.prefexData=this.service.setService();

}

}
