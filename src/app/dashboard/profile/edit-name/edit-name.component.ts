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
  selector: 'app-edit-name',
  templateUrl: './edit-name.component.html',
  styleUrls: ['./edit-name.component.css']
})
export class EditNameComponent implements OnInit {

  constructor(private _service: dashbaordService, private router: Router, private snackBar: MatSnackBar, private _location: Location) { }
  myForm: FormGroup;
  email: FormControl;
  ngOnInit() {
    let firstName = this._service.users['result']['firstName'];
    let lastName = this._service.users['result']['lastName'];
    this.myForm = new FormGroup({
      user_firstName: new FormControl(firstName,
        Validators.required),
      user_lastName: new FormControl(lastName,
        Validators.required),



    })
  }
  auth_user() {

    this._service.updateName(this.myForm.value).subscribe(users => {
      this._location.back();
      this.snackBar.open('Updated Succesfully', '', {
        duration: 5000,
      });
      console.log(users);
    })
  }
  back(){
    this._location.back();
  }
}
