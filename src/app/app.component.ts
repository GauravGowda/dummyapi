import { Component, OnInit } from '@angular/core';
import { UsersapiService } from './service/usersapi.service';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/model/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dummyapi';
  status: any
  data: any = []
  loadData = false
  msg: any = undefined
  errMsg: any = undefined
  query: string = ""
  dataidNumber: string = ""
  employee: Employee = new Employee();
  constructor(private user: UsersapiService, private http: HttpClient) {
    this.user.getData().subscribe(
      (data) => {
        //console.log(data);
        this.data = data
      },
      (error) => {
        console.log("Something went wrong")

      }
    );


  }

  ngOnInit(): void {

    //this.displayData()

  }

  displayData() {
    this.loadData = true

  }
  back() {
    this.loadData = false
  }

  deleteEmployee(id: string) {
    console.log("deleting id:" + id)
    this.user.deleteEmployeeById(parseInt(id)).subscribe(
      (data) => {
        this.msg = "Deleted";
        this.errMsg = undefined;
        this.dataidNumber = id
        this.displayData();
      },
      (error) => {
        this.msg = undefined;
        this.errMsg = "Not Deleted"
        //JSON.stringify(error.error);

      }
    );
  }

  addEmployee() {
    parseInt(this.employee.userId)
    this.dataidNumber = this.employee.id
    parseInt(this.employee.id)
    console.log("Add emp called")
    console.log(JSON.stringify(this.employee))
    this.user.addEmployee(this.employee).subscribe(
      (data) => {
        this.msg = "Added";
        this.errMsg = undefined;
      },
      (error) => {
        this.msg = undefined;
        this.errMsg = "Not added"//JSON.stringify(error.error);

      }
    )
    this.employee = new Employee()
  }
}
