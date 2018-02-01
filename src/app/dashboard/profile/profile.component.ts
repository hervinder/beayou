import { Component, OnInit } from '@angular/core';
import {dashbaordService} from '../dashboard.service'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  users:any;
  name:string;
  location:string;
  mobile:string;
  profileImage:any;
  image_hide:boolean= true;
  constructor(private _service:dashbaordService) { }

  ngOnInit() {
    this._service.getUsers().subscribe(users=>{
      
      
      this.name = users['result']['firstName'] +' '+users['result']['lastName'] ;
      this.location = users['result']['state'];
      this.profileImage = users['result']['profileImage'];
      if(this.profileImage === null || this.profileImage === ''){
        this.image_hide = true;
      }
      else{
        this.image_hide = false;
      }
      if(users['result']['mobile'] === null || users['result']['mobile'] === ''){
       this.mobile = "Add your Number";
      }
      else{
        this.mobile = users['result']['mobile'];
      }
      
    })
  
  
  
  console.log(this.users);
   
  }

}
