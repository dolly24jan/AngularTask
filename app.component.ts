import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName =''
  lastName=''
  dob=''
  email=''
  phone=''
  address=''
  data:any=[{
    firstName :'dolly',
  lastName:'singh',
  dob:'24/03/2020',
  email:'abc@gmaiil.com',
  phone:'1234567890',
  address:'Patna'
  }]
  sentData(){
    const formData ={
      firstName :this.firstName,
  lastName:this.lastName,
    dob:this.dob,
  email:this.email,
  phone:this.phone,
  address:this.address
    }

    this.data.push(formData)
    console.log(this.data)
    this.firstName =''
  this.lastName=''
  this.dob=''
  this.email=''
  this.phone=''
  this.address=''
  }
}
