import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  firstName:string='prabhas';
  lastName:string='vaerma';
  salary:number=45329875;
  list={
    1:"kolhpaur",
    2:"mumbai",
    3:"pune",
    4:"nagpur"
  }

marks:number=345;





}
