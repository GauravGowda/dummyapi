import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersapiService {

  constructor(private http:HttpClient) { }

    getData():Observable<any>{
      let url = "https://jsonplaceholder.typicode.com/posts";
      return this.http.get(url);
    }
    deleteEmployeeById(eId:number):Observable<any>{
   
      return this.http.delete("https://jsonplaceholder.typicode.com/posts/"+eId,{responseType: 'text'});
     }
}
