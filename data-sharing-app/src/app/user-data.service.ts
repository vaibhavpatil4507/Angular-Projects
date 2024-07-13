import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  public setService():string{
    return "Hello";
  }

  constructor() { }
}
