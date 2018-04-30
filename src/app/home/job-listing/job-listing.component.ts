import { Component, OnInit } from '@angular/core';
import { RootService } from "../../app.service";

import { ActivatedRoute, Params, Router } from '@angular/router';
import { indiaStateService } from "../../shared/india-state.module";
@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.css']
})
export class JobListingComponent implements OnInit {

  listingsObj;
  no_records= false;
  constructor(private appService: RootService,
    private router: Router, private stateService: indiaStateService) { }


  ngOnInit() {
    const list = JSON.parse(sessionStorage.getItem('masterDatasessionData_JobListing'));
    if (list.length === 0) {
      this.no_records = true;
      console.log("NO records");
    }
    else {
      this.no_records = false;
      this.listingsObj = list;
    }

  }
  getstate(state) {
    const states = this.stateService.STEPS;
    let result = '';
  
    // for (var key in states) {
    //   if (key['code'] === state) {
    //     return key['name'];
    //   }
    // }
    states.forEach(
      (x) => {
        if (x['code'] === state) {
          result = x['name'];
        }

      }
    )

    return result;

  }
  list(cards) {

   
    console.log(cards);
    this.router.navigate(['/listJobDetails', cards.order_id])
    // const obj = {
    //   order_id: cards.order_id,
    
    // };
    // this.appService.jobListinfg_details(obj).subscribe(
    //   (res) => {
    //     console.log(res);

      
    //   }
    // )
  }
}
