import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";

import { dashbaordService } from '../../dashboard.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Location } from '@angular/common';


@Component({
  selector: 'app-edit-mobile',
  templateUrl: './edit-mobile.component.html',
  styleUrls: ['./edit-mobile.component.css']
})
export class EditMobileComponent implements OnInit {

 
  constructor(private _service: dashbaordService, private router: Router, private snackBar: MatSnackBar, private _location: Location) { }
  myForm: FormGroup;
  email: FormControl;
  ngOnInit() {
    let mobile = this._service.users['result']['mobile'];
    this.myForm = new FormGroup({
      user_number: new FormControl(mobile,
        Validators.required),
     



    })
  }
  auth_user() {

    this._service.updateMobile(this.myForm.value).subscribe(users => {
      this._location.back();
      this.snackBar.open('Updated Succesfully', '', {
        duration: 5000,
      });
    
    })
  }
  back(){
    this._location.back();
  }
}
