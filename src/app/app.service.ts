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
       if(info['member'] === 'company'){
        return this._http.post("http://ileadcorporation.com/beayou_test/signin/signin_company.php",info)
        .map((response) => response.json());
       }
       else if(info['member'] === 'talent'){
        return this._http.post("http://ileadcorporation.com/beayou_test/signin/signin_talent.php",info)
        .map((response) => response.json());
       }
       else if(info['member'] === 'training'){
        return this._http.post("http://ileadcorporation.com/beayou_test/signin/signin_training.php",info)
        .map((response) => response.json());
       }
      else{

      }
   }
   addTalentDetails(info){
    return this._http.post("http://ileadcorporation.com/beayou_test/signup/signup_talent.php",info)
    .map((response) => response.json());
   }
   addTraineeDetails(info){
    return this._http.post("http://ileadcorporation.com/beayou_test/signup/signup_training.php",info)
    .map((response) => response.json());
   }
}
