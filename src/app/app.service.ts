import { Injectable } from '@angular/core';
import { Http  } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class RootService{

   constructor(private _http:Http){}

   addSingupDetails(info){
          return this._http.post("http://ileadcorporation.com/beayou_test/script.php",info)
          .map((response) => response.json());
   }
   login_auth(info){
       return this._http.post("http://ileadcorporation.com/beayou_test/login.php",info)
          .map((response) => response.json());
   }
}
