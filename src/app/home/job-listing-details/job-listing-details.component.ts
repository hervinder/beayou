import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RootService } from "../../app.service";
import { LoaderService } from "../../shared/loader/loader.service";
@Component({
  selector: 'app-job-listing-details',
  templateUrl: './job-listing-details.component.html',
  styleUrls: ['./job-listing-details.component.css']
})
export class JobListingDetailsComponent implements OnInit {
  id: number;
  private sub: any;
  details;
  description;
  job_role_desc;
  rehersal_date;
  rehersal_date_show: boolean;
  constructor(private router: Router, private route: ActivatedRoute,
    private appService: RootService, private loaderService: LoaderService) {

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id);
      const obj = {
        order_id: this.id,

      };
      this.loaderService.showLoader("");
      this.appService.jobListinfg_details(obj).subscribe(
        (res) => {
          this.details = res['msg'][0];
          this.description = this.details.project_description_details.trim();
          this.job_role_desc = this.details.role_description_details.trim();
          this.rehersal_date = this.details.project_rehearsal_details;

          if (this.rehersal_date === '') {
            this.rehersal_date_show = false;
          }
          else {
            this.rehersal_date_show = true;
          }

          console.log(this.description);
          console.log(res);
          this.loaderService.hideLoader();

        }
      )
    });


  }

  ngOnInit() {
  }
  apply() {
    const isActive = JSON.parse(localStorage.getItem("currentUser"));
    if (isActive === null) {
      this.router.navigate(['/signin'])

    }
    else {
      this.router.navigate(['/applyTraining']);
    }

  }
}
