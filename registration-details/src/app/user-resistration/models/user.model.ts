  export interface User{
    fullName:string;
    email:string;
    password:string;
    cellNumber:string;
    address:Address;
  }

export interface Address
{
  line1:string;
  line2:string;
  pin:number;
}
