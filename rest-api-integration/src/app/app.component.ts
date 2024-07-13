import { Component } from '@angular/core';
import { UserdataService } from './userdata.service';
import { User } from './Models/userModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userData:User[]=[];

  constructor(private service:UserdataService){
      this.userData= service.userList;
  }


}
