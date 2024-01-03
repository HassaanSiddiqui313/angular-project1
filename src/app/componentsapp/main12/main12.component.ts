import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs';
import { DatabaseService } from 'src/app/servicefolder/database.service';
import { MainserviceService } from 'src/app/servicefolder/mainservice.service';

@Component({
  selector: 'app-main12',
  templateUrl: './main12.component.html',
  styleUrls: ['./main12.component.scss']
})
export class Main12Component {
  constructor(private servicedata:MainserviceService,private dbservice:DatabaseService,private http:HttpClient){
    servicedata.gobj2.subscribe(e=>this.mobj=e)
    servicedata.editname.subscribe(e=>this.editdata[0]=e)
    servicedata.editprice.subscribe(e=>this.editdata[1]=e)
    servicedata.editindex.subscribe(e=>this.index=e)
    servicedata.editmode.subscribe(e=>this.editmode=e)
    servicedata.editdata.subscribe(e=>this.editmodedata=e)
    this.f3()
  }
  editmodedata=[{id:'',name:'',price:''}];
  serverdata={};
  editdata=['',''];
  index=-1;
  editmode=false;
  mobj=[{}];
  valid:boolean=false;
  f1(e:NgForm){
    if (e.valid) {
      this.mobj.push(e.value)
      this.serverdata=e.value
      this.f2()
      e.reset()
      this.serverdata={};
    }else{
     this.valid=true;
     setTimeout(() => {
       this.valid=false;
     }, 1500);
     
    }
  }
  f2(){
    this.dbservice.saveproducts2(this.serverdata).subscribe(
      (Response)=>{this.f3()},
      (err)=>console.log(err)
    )
  }
  f3(){
    this.dbservice.fetchdata2().pipe(map((e: { [x: string]: any; })=>{
      let a=[]
      for(const key in e){
        // console.log({id:key,...e[key]})
        a.push({id:key,...e[key]})
      }
      return a
    })).subscribe(
      (response)=>{
        const a=JSON.stringify(response)
        this.servicedata.gobj2.next(this.mobj=JSON.parse(a))
        // console.log(this.mobj);
        
      },
      (err)=>console.log(err)
    )
  }
  f4(a:any,b:any){
    this.editmodedata[this.index].name=a.value;
    this.editmodedata[this.index].price=b.value;
    let c={name:this.editmodedata[this.index].name,price:this.editmodedata[this.index].price}
    // console.log(c);
    
    this.servicedata.gobj2.next([...this.editmodedata])
    this.http
    .put('https://products-data-78bbd-default-rtdb.firebaseio.com/products2/'+this.editmodedata[this.index].id+'.json',c).subscribe(response=>{},err=>{console.log(err)})
    this.servicedata.editmode.next(false)
  }
}
