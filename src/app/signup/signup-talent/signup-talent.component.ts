import { Component, OnInit } from '@angular/core';
import { data } from "../signup_data";
@Component({
  selector: 'app-signup-talent',
  templateUrl: './signup-talent.component.html',
  styleUrls: ['./signup-talent.component.css']
})
export class SignupTalentComponent implements OnInit {

  title = 'app';

  data =[{
    "name": "Acting"
  },{
    "name": "Extras"
  },{
    "name": "Modeling"
  },{
    "name": "Musician"
  },{
    "name": "Photography"
  },{
    "name": "TV & Reality"
  },{
    "name": "Dancing"
  },{
    "name": "Film & Stage Crew"
  },{
    "name": "Stylist"
  },{
    "name": "Magazine"
  },{
    "name": "General Jobs"
  }];

  month=[{
   "name":"January",
   "code":"1"
  },{
    "name":"February",
    "code":"2"
   },{
    "name":"March",
    "code":"3"
   },{
    "name":"April",
    "code":"4"
   },{
    "name":"June",
    "code":"5"
   },{
    "name":"July",
    "code":"7"
   },{
    "name":"August",
    "code":"8"
   },{
    "name":"September",
    "code":"9"
   },{
    "name":"October",
    "code":"10"
   },{
    "name":"Novemeber",
    "code":"11"
   },{
    "name":"December",
    "code":"12"
   }];

   days=[{
     "name":"1"
   },{
    "name":"2"
  },{
    "name":"3"
  },{
    "name":"4"
  },{
    "name":"5"
  },{
    "name":"6"
  },{
    "name":"7"
  },{
    "name":"8"
  },{
    "name":"9"
  },{
    "name":"10"
  },{
    "name":"11"
  },{
    "name":"12"
  },{
    "name":"13"
  },{
    "name":"14"
  },{
    "name":"15"
  },{
    "name":"16"
  },{
    "name":"17"
  },{
    "name":"18"
  },{
    "name":"19"
  },{
    "name":"20"
  },{
    "name":"2"
  },{
    "name":"21"
  },{
    "name":"22"
  },{
    "name":"23"
  },{
    "name":"24"
  },{
    "name":"25"
  },{
    "name":"26"
  },{
    "name":"27"
  },{
    "name":"28"
  },{
    "name":"29"
  },{
    "name":"30"
  },{
    "name":"31"
  }];

  years=[{
    "name":"2000"
  },
  {
    "name":"1999"
  },
  {
    "name":"1998"
  },
  {
    "name":"1997"
  },
  {
    "name":"1996"
  },
  {
    "name":"1995"
  },
  {
    "name":"1994"
  },
  {
    "name":"1993"
  },
  {
    "name":"1992"
  },
]
  constructor(){ 

  }


  ngOnInit() { }

}
