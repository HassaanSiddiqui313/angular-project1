import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { DatabaseService } from 'src/app/servicefolder/database.service';
import { MainserviceService } from 'src/app/servicefolder/mainservice.service';

@Component({
  selector: 'app-main1',
  templateUrl: './main1.component.html',
  styleUrls: ['./main1.component.scss']
})
export class Main1Component {
  constructor(private servicedata:MainserviceService,private dbservice:DatabaseService){
    servicedata.gobj.subscribe(e=>this.mobj=e)
    this.f3()
    servicedata.editname.subscribe(e=>this.editdata[0]=e)
    servicedata.editprice.subscribe(e=>this.editdata[1]=e)
    servicedata.editindex.subscribe(e=>this.index=e)
    servicedata.editmode.subscribe(e=>this.editmode=e)
    servicedata.editdata.subscribe(e=>this.editmodedata=e)
  }
  editmodedata=[{}];
  editdata=['',''];
  index=-1;
  editmode=false;
  mobj=[{}];
  valid:boolean=false;
  f1(e:NgForm){
    if (e.valid) {
      this.mobj.push(e.value)
      e.reset()
      this.f2()
    }else{
     this.valid=true;
     setTimeout(() => {
       this.valid=false;
     }, 1500);
     
    }
  }
  f2(){
    this.dbservice.saveproducts(this.mobj).subscribe(
      (Response)=>{},
      (err)=>console.log(err)
    )
  }
  f3(){
    this.dbservice.fetchdata().subscribe(
      (response)=>{
        const a=JSON.stringify(response)
        this.servicedata.gobj.next(this.mobj=JSON.parse(a))
      },
      (err)=>console.log(err)
    )
  }
  f4(a:any,b:any){
    this.editmodedata[this.index]={'name':a.value,'price':b.value};
    this.servicedata.gobj.next([...this.editmodedata])
    this.f2()
    this.servicedata.editmode.next(false)
  }
}
