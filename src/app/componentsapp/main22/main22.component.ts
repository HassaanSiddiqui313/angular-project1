import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/servicefolder/database.service';
import { MainserviceService } from 'src/app/servicefolder/mainservice.service';

@Component({
  selector: 'app-main22',
  templateUrl: './main22.component.html',
  styleUrls: ['./main22.component.scss']
})
export class Main22Component {
  constructor(private servicedata:MainserviceService,private dbs:DatabaseService,private http:HttpClient){
    servicedata.gobj2.subscribe(e=>{this.obj=e})
  }
  headerdat=this.dbs.headerdata();
  obj=[
    {id:'',name:'',price:''},]
  f1(e:any){
    let a=this.obj[e].id;
    // console.log('https://products-data-78bbd-default-rtdb.firebaseio.com/products2/'+a+'.json');
    if (confirm('are you sure')) {
      this.http.delete('https://products-data-78bbd-default-rtdb.firebaseio.com/products2/'+a+'.json')
      .subscribe(response=>{console.log(response)},err=>{console.log(err)})
    }
    this.obj.splice(e,1);
  }
  f2(){
    this.dbs.saveproducts(this.obj).subscribe(
      (Response)=>{},
      (err)=>console.log(err)
    )
  }
  f3(a:any,b:any){
    this.servicedata.editdata.next([...this.obj])
    this.servicedata.editmode.next(true);
      let index=this.obj.findIndex(e=>e.name==a.innerHTML);
      this.servicedata.editname.next(a.innerHTML);
      this.servicedata.editprice.next(b.innerHTML);
      this.servicedata.editindex.next(index);
      
  }
}
