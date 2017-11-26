import { Component, OnInit } from '@angular/core';
import { data } from "../signup_data";
@Component({
  selector: 'app-signup-talent',
  templateUrl: './signup-talent.component.html',
  styleUrls: ['./signup-talent.component.css']
})
export class SignupTalentComponent implements OnInit {

  private json;
  

  constructor(){ 

    this.json =[{'name':'a'}];
   }


  ngOnInit() { }

}
