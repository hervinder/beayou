import { Component, OnInit } from '@angular/core';
import { RootService } from '../app.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  private model = {
    user_email: '',
    user_password: '',
    member: ''
  };
  error_msg='';
  error_flag=false;
  constructor(private signinService: RootService, private router: Router) {

  }

  ngOnInit() {
  }
  auth_user() {

    console.log(this.model);

    this.signinService.login_auth(this.model)
      .subscribe((res) =>{
       if(res['isError'] === 'Y'){
           this.error_flag = true;
           this.error_msg= res['error'];
       }
       else{
        this.router.navigate(["./dashboard"])
        console.log(res);
       }
      
      });

  }
}
