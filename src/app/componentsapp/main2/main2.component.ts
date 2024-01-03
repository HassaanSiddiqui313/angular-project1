import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/servicefolder/database.service';
import { MainserviceService } from 'src/app/servicefolder/mainservice.service';

@Component({
  selector: 'app-main2',
  templateUrl: './main2.component.html',
  styleUrls: ['./main2.component.scss']
})
export class Main2Component {
  constructor(private servicedata:MainserviceService,private dbs:DatabaseService){
    servicedata.gobj.subscribe(e=>{this.obj=e})
  }
  headerdat=this.dbs.headerdata();
  obj=[
    {name:'',price:''},]
  f1(e:any){
    this.obj.splice(e,1);
    this.f2()
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
