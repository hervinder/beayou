import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { indiaStateService } from '../../shared/india-state.module';
import { physicalAttributeService } from "../../shared/physical-attribute";
import { dialogueService } from '../../shared/dialogue/dialogue.service';
import { LoaderService } from "../../shared/loader/loader.service";
import { dashbaordService } from '../dashboard.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-job',
  templateUrl: './list-job.component.html',
  styleUrls: ['./list-job.component.css']
})
export class ListJobComponent implements OnInit {

  list_job_form = {
    firstForm: '',
    secondForm: '',
    thirdForm: ''
  };
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  category;
  subcategory;
  states;
  category_master;
  height;
  weight;
  skin_color;
  waist;
  foods = [
    { value: 'steak-0', viewValue: 'Actors wanted' },
    { value: 'pizza-1', viewValue: 'Extras wanted' },
    { value: 'tacos-2', viewValue: 'Models wanted' },
    { value: 'steak-0', viewValue: 'Musicians wanted' },
    { value: 'pizza-1', viewValue: 'Photographers wanted' },
    { value: 'tacos-2', viewValue: 'TV &amp; Reality' },
    { value: 'steak-0', viewValue: 'Dancers wanted' },
    { value: 'pizza-1', viewValue: 'Film &amp; Stage Crew wanted' },
    { value: 'tacos-2', viewValue: 'Hair, Makeup &amp; Stylists wanted' },
    { value: 'tacos-2', viewValue: 'Staff/Temps' }
  ];
  constructor(private _formBuilder: FormBuilder,
    private moduleService: indiaStateService,
    private physicalService: physicalAttributeService,
    private dialogue: dialogueService,
    private apploader: LoaderService,
    private _service: dashbaordService,
    private _location: Location
  ) {

    this.height = this.physicalService.heights;
    this.weight = this.physicalService.weight;
    this.waist = this.physicalService.waist;
    this.skin_color = this.physicalService.skin_color;

    this.states = this.moduleService.STEPS;
    this.category_master = this.moduleService.category;


    console.log(this.states);
    this.category = this.category_master.filter(x => x.parent === "");



  }


  ngOnInit() {

    // this.firstFormGroup = this._formBuilder.group({
    //   categoryCtrl: ['', Validators.required],
    //   subcategoryCtrl: ['', Validators.required],
    //   heading: ['', Validators.required],
    //   phonenumber: [''],
    //   state: ['', Validators.required],
    //   project_rehearsal: ['', Validators.required],
    //   project_desc: ['', Validators.required]

    // });

    this.firstFormGroup = this._formBuilder.group({
      categoryCtrl: ['',Validators.required],
      subcategoryCtrl: ['',Validators.required],
      heading: ['',Validators.required],
      phonenumber: ['true'],
      state: ['',Validators.required],
      project_rehearsal: [''],
      project_desc: ['',Validators.required]

    });
    this.secondFormGroup = this._formBuilder.group({
      role_title: ['',Validators.required],
      gender_male: ['true'],
      gender_female: ['true'],
      role_description: [''],
      no_previous_exp: ['true'],
      previous_extra_exp: ['true'],
      previous_feature_exp: ['true'],
      previous_speaking: ['true'],
      heightMinCtrl: ['Any'],
      heightMaxCtrl: ['Any'],
      weightMinCtrl: ['Any'],
      weightMaxCtrl: ['Any'],
      waistMinCtrl: ['Any'],
      waistMaxCtrl: ['Any'],
      skinColorCtrl: ['Any']
    });
    this.thirdFormGroup = this._formBuilder.group({
      date: ['',Validators.required],
      job_compensation: ['',],
      associated_website: [''],
      job_compensation_details: [''],
      fees: [''],
      fees_details: ['']

    })
  }
  categoryMatch(value) {

    this.subcategory = this.category_master.filter(x => x.parent === value.code)
    console.log(this.subcategory);
  }
  firstFormsubmit() {
    this.list_job_form.firstForm = this.firstFormGroup.value;
    console.log(this.firstFormGroup.value);
  }
  secondFormsubmit() {
    this.list_job_form.secondForm = this.secondFormGroup.value;
    console.log(this.secondFormGroup.value);
  }
  thirdFormsubmit() {
    const date = this.thirdFormGroup.value.date;
    const full_date =(date.getMonth()+ 1) +'/'+ date.getDate() +'/'+date.getFullYear();
    console.log(full_date);
    this.thirdFormGroup.value.date = full_date;

    this.list_job_form.thirdForm = this.thirdFormGroup.value;
    console.log(this.thirdFormGroup.value);
    console.log(this.list_job_form);
    this._service.list_job(this.list_job_form).subscribe(res => {
      if (res.isError === "Y") {
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
      else {
        this.dialogue.alertBox({
          title: 'Sucess',
          message: 'Job is Successfully Listed',
          messageType: 'success',
          actionlabel: ['Close']
        }).take(1).subscribe((res) => {
          this._location.back();
          console.log(res);
        });
      }





      console.log(res);
    })
  }
}
