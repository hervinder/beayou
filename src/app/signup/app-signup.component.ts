import { Component, OnInit } from '@angular/core';
import { RootService } from '../app.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { newUser } from '../signup';
import {dialogueService} from '../shared/dialogue/dialogue.service';
import {LoaderService} from "../shared/loader/loader.service";
import { indiaStateService } from "../shared/india-state.module"

@Component({
  selector: 'app-app-signup',
  templateUrl: './app-signup.component.html',
  styleUrls: ['./app-signup.component.css']
})
export class AppSignupComponent implements OnInit {
    title='Hello';
    states;
  constructor(
    private signupService: RootService,
    private router: Router,
    private dialogue: dialogueService,
    private apploader: LoaderService,
    private stateService:indiaStateService,) { }

  ngOnInit() {
    this.states = this.stateService.STEPS;
  }
  model = new newUser();
  addUser() {
    console.log(this.model);
    this.apploader.showLoader("");
    this.signupService.addSingupDetails(this.model)
      .subscribe((res) => {
        this.apploader.hideLoader();
        this.model = new newUser();
       
        if(res.isError === "Y"){
          let message = res.error;
          
          this.dialogue.alertBox({
            title: 'Error',
            message: message,
            messageType: 'error',
            actionlabel: ['Close']
          }).take(1).subscribe((res) => {
            console.log(res);
          });
        }
        else{
          
          this.dialogue.alertBox({
            title: 'Sucess',
            message: 'Account Created Successfully',
            messageType: 'success',
            actionlabel: ['Close']
          }).take(1).subscribe((res) => {
            console.log(res);
            this.router.navigate(['/signin'])
          });
        }
        
       });
  }
}
