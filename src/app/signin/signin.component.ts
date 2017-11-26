import { Component, OnInit } from '@angular/core';
import { RootService } from '../app.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
   private model={
     user_email:'',
     user_password:''
   }
  constructor(private signinService:RootService) {
     
   }

  ngOnInit() {
  }
auth_user(){

console.log(this.model);
  this.signinService.login_auth(this.model)
      .subscribe((res) => console.log(res));

}
}
