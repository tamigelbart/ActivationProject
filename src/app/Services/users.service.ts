import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
result:any;
  constructor(private _http: HttpClient ) { }
 getCount() {
this._http.get("/api/users").subscribe(res=> {
  this.result=res;
  console.log(res)
  
   })
   return this.result;
  }
}
