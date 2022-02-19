import { Component, OnInit } from '@angular/core';
import { UsersapiService } from './service/usersapi.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dummyapi';
  status:any
  data:any = []
  loadData = false
  msg:any=undefined
  errMsg:any=undefined
  query:string=""
  constructor(private user:UsersapiService,private http:HttpClient){
    

}

ngOnInit(): void {

//this.displayData()

}

displayData(){
  this.loadData=true
  this.user.getData().subscribe(
    (data)=>{
      //console.log(data);
      this.data = data
    },
    (error)=>{
      console.log("Something went wrong")
      
    }
  );
}
back(){
  this.loadData=false
}

deleteEmployee(id:string){
  console.log("deleting id:"+id)
  this.user.deleteEmployeeById(parseInt(id)).subscribe(
    (data)=>{
      this.msg="Deleted";
      this.errMsg=undefined;
      this.displayData();
    },
    (error)=>{
      this.msg=undefined;
      this.errMsg="Not Deleted"
      //JSON.stringify(error.error);
      
    }
  );
}
}
