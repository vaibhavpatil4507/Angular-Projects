import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-outside',
  templateUrl: './outside.component.html',
  styleUrls: ['./outside.component.css']
})
export class OutsideComponent implements OnInit {

  //we Dont worry for service class object,angular will create obj. internally,we just need to request for that
  constructor() {

   }

  ngOnInit(): void {

  }

 public sendData():string{
    return "I am from outsiide component i took help of @ViewChild Deco function"
  }
}
