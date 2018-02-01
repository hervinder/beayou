import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-list-training',
  templateUrl: './list-training.component.html',
  styleUrls: ['./list-training.component.css']
})
export class ListTrainingComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  foods = [
    {value: 'steak-0', viewValue: 'Actors wanted'},
    {value: 'pizza-1', viewValue: 'Extras wanted'},
    {value: 'tacos-2', viewValue: 'Models wanted'},
    {value: 'steak-0', viewValue: 'Musicians wanted'},
    {value: 'pizza-1', viewValue: 'Photographers wanted'},
    {value: 'tacos-2', viewValue: 'TV &amp; Reality'},
    {value: 'steak-0', viewValue: 'Dancers wanted'},
    {value: 'pizza-1', viewValue: 'Film &amp; Stage Crew wanted'},
    {value: 'tacos-2', viewValue: 'Hair, Makeup &amp; Stylists wanted'},
    {value: 'tacos-2', viewValue: 'Staff/Temps'}
  ];
  constructor(private _formBuilder: FormBuilder) { }
 
  ngOnInit() {
    
    this.firstFormGroup = this._formBuilder.group({
      categoryCtrl: ['', Validators.required],
      subcategoryCtrl:['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
