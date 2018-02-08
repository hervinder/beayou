import { Component, OnInit } from '@angular/core';
import { dashbaordService } from "../../dashboard.service";
@Component({
  selector: 'app-fetch-images',
  templateUrl: './fetch-images.component.html',
  styleUrls: ['./fetch-images.component.css']
})
export class FetchImagesComponent implements OnInit {

  constructor(private _service: dashbaordService) {}
  items:any;
  ngOnInit() {

    this._service.fetchImages().subscribe(users=>{
      this.items = users['msg'];
      console.log(users['msg']);
    });
  }

}
