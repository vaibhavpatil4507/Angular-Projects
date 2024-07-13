import { Injectable } from '@angular/core';
import { Student } from './models/studentData-model';

@Injectable({
  providedIn: 'root'
})
export class StudentServicesService {


listOfStudent:Student[]=[];

  constructor() {
    this.listOfStudent=[
        {
          rollNumber:2,
          firstName:'pratik',
          lastName:'kumar',
          age:22,
          gender:'male',
          schoolName:'JJMCOE'
        },
        {
          rollNumber:11,
          firstName:'pravin',
          lastName:'kumbhar',
          age:23,
          gender:'male',
          schoolName:'JJMCOE'
        },{
          rollNumber:12,
          firstName:'prajakta',
          lastName:'chavan',
          age:22,
          gender:'Female',
          schoolName:'JJMCOE'
        },{
          rollNumber:13,
          firstName:'pranita',
          lastName:'kamable',
          age:24,
          gender:'Female',
          schoolName:'SSVM'
        },{
          rollNumber:14,
          firstName:'piyush',
          lastName:'kurane',
          age:22,
          gender:'male',
          schoolName:'SSVM'
        },

      ]

   }

   getListOfStudData():Student[]{
    return this.listOfStudent;
   }


}
