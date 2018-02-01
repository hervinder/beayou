import { Injectable } from '@angular/core';
import { Http  } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class RootService{

    public token;
   constructor(private _http:Http){}

   addSingupDetails(info){
          return this._http.post("http://ileadcorporation.com/beayou_test/signup/signup_company.php",info)
          .map((response) => response.json());
   }
   login_auth(info){
       if(info['member'] === 'company'){
        return this._http.post("http://ileadcorporation.com/beayou_test/signin/signin_company.php",info)
        .map((response) => {
          let res=  response.json();
          console.log(res);     
        
        });
       }
       else if(info['member'] === 'talent'){
        return this._http.post("http://ileadcorporation.com/beayou_test/signin/signin_talent.php",info)
        .map((response) => response.json());
       }
       else if(info['member'] === 'training'){
        return this._http.post("http://ileadcorporation.com/beayou_test/signin/signin_training.php",info)
        .map((response) => {
            let res=  response.json();
            let username = info['user_email'];
            if(res['error_code'] === '1'){
                  this.token = res["data"]["token"];
                 localStorage.setItem('currentUser', JSON.stringify({ username: username, token: this.token }));
                 return res['error_code'];
            }   
            else{
                return res['error_code'];
            }  
          
          });
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
