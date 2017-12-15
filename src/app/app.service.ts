import { Injectable } from '@angular/core';
import { Http  } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class RootService{

   constructor(private _http:Http){}

   addSingupDetails(info){
          return this._http.post("http://ileadcorporation.com/beayou_test/signup/signup_company.php",info)
          .map((response) => response.json());
   }
   login_auth(info){
       return this._http.post("http://ileadcorporation.com/beayou_test/login.php",info)
          .map((response) => response.json());
   }
   addTalentDetails(info){
    return this._http.post("http://ileadcorporation.com/beayou_test/signup/signup_talent.php",info)
    .map((response) => response.json());
   }
   addTraineeDetails(info){
    return this._http.post("http://ileadcorporation.com/beayou_test/signup/signup_talent.php",info)
    .map((response) => response.json());
   }
}
