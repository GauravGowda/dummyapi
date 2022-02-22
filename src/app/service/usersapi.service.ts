import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from 'src/model/Employee';

@Injectable({
  providedIn: 'root'
})
export class UsersapiService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    let url = "https://jsonplaceholder.typicode.com/posts";
    return this.http.get(url);
  }
  deleteEmployeeById(eId: number): Observable<any> {

    return this.http.delete("https://jsonplaceholder.typicode.com/posts/" + eId, { responseType: 'text' });
  }
  addEmployee(employee: Employee): Observable<any> {
    console.log("Add emp service:" + JSON.stringify(employee))
    return this.http.post("https://jsonplaceholder.typicode.com/posts", employee, { responseType: 'text' });
  }
}
