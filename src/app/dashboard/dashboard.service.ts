import { Injectable } from '@angular/core';
import { Http ,  Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {RootService} from '../app.service'
import {MatSnackBar} from '@angular/material';
import {dialogueService} from '../shared/dialogue/dialogue.service'
import { Observable } from 'rxjs';


@Injectable()

export class dashbaordService{
    firstName: string;
    lastName: string;
    users:any;
  constructor(private service:RootService,private http:Http,public snackBar: MatSnackBar, private dialogueservice: dialogueService){}
        getUsers(){
            let token = JSON.parse(localStorage.getItem("currentUser"));
            console.log(token);
            let headers = new Headers({ 'Authorization': 'Bearer ' + token['token']}) ;
            let options = new RequestOptions({headers:headers});
            // let headers: Headers = new Headers({
            //     'Content-Type': 'application/json',
            //     Authorization: 'Bearer ' + this.service.token
            //               });
            
            return this.http.get('http://ileadcorporation.com/beayou_test/dashboard/dashboard.php',options)
               .map((response)=> 
               {
                   this.users = response.json()
                   if(this.users['isError'] === 'N'){
                     return this.users;
                    }
                    else{
                        let message= this.users['result'];
                        this.snackBar.open(message, '', {
                            duration: 2000,
                          });
                        // this.dialogueservice.toastBox({
                        //     title: 'Error',
                        //     message: message,
                        //     messageType: 'error',
                        //     actionlabel: ['Close']
                        //       }).take(1).subscribe((res)=>{
                        //         console.log(res);
                        //       })
                    }
            
            });
        }

        getUserDetail(): Observable<any>{
           return this.users;
        }

        updateMobile(info){
            let token = JSON.parse(localStorage.getItem("currentUser"));
            let headers = new Headers({ 'Authorization': 'Bearer ' + token['token']}) ;
            let options = new RequestOptions({headers:headers});
            return this.http.post('http://ileadcorporation.com/beayou_test/dashboard/edit/edit_mobile.php',info,options)
            .map((response)=> 
            {
                let response_message = response.json()
                if(response_message['isError'] === 'N'){
                  return response_message;
                 }
                 else{
                     let message= response_message['result'];
                     this.snackBar.open(message, '', {
                         duration: 2000,
                       });
                     // this.dialogueservice.toastBox({
                     //     title: 'Error',
                     //     message: message,
                     //     messageType: 'error',
                     //     actionlabel: ['Close']
                     //       }).take(1).subscribe((res)=>{
                     //         console.log(res);
                     //       })
                 }
         
         });
        }
        updateName(info){
            let token = JSON.parse(localStorage.getItem("currentUser"));
            let headers = new Headers({ 'Authorization': 'Bearer ' + token['token']}) ;
            let options = new RequestOptions({headers:headers});
            return this.http.post('http://ileadcorporation.com/beayou_test/dashboard/edit/edit_name.php',info,options)
            .map((response)=> 
            {
                let response_message = response.json()
                if(response_message['isError'] === 'N'){
                  return response_message;
                 }
                 else{
                     let message= response_message['result'];
                     this.snackBar.open(message, '', {
                         duration: 2000,
                       });
                     // this.dialogueservice.toastBox({
                     //     title: 'Error',
                     //     message: message,
                     //     messageType: 'error',
                     //     actionlabel: ['Close']
                     //       }).take(1).subscribe((res)=>{
                     //         console.log(res);
                     //       })
                 }
         
         });
        }
        updateImage(info){
            let token = JSON.parse(localStorage.getItem("currentUser"));
            let headers = new Headers({ 'Authorization': 'Bearer ' + token['token']}) ;
            let options = new RequestOptions({headers:headers});
            return this.http.post('http://ileadcorporation.com/beayou_test/dashboard/edit/edit_image.php',info,options)
            .map((response)=> 
            {
                let response_message = response.json()
                if(response_message['isError'] === 'N'){
                  return response_message;
                 }
                 else{
                     let message= response_message['result'];
                     this.snackBar.open(message, '', {
                         duration: 2000,
                       });
                     // this.dialogueservice.toastBox({
                     //     title: 'Error',
                     //     message: message,
                     //     messageType: 'error',
                     //     actionlabel: ['Close']
                     //       }).take(1).subscribe((res)=>{
                     //         console.log(res);
                     //       })
                 }
         
         });
        }
}