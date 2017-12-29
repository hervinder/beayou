import { Component, OnInit } from '@angular/core';
import { RootService } from '../../app.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {  newTrainee } from '../training.model';
@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  constructor(
    private signupService: RootService,
    private router: Router) { }

  ngOnInit() {
  }
  model = new newTrainee();
  addTrainee() {    
    console.log(this.model);
     this.signupService.addTraineeDetails(this.model)
       .subscribe((res) => console.log(res));
  }
}
