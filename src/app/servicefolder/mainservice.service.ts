import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class MainserviceService {

  constructor() { }
  obj=[
    {name:'Laptop',price:'1999.9'},
    {name:'Mobile',price:'999.9'},
    {name:'IPad',price:'1499.9'},
    {name:'MacBook',price:'2999.9'},
  ]
  gobj=new BehaviorSubject<any>(this.obj)
  gobj2=new BehaviorSubject<any>([])
  editname=new Subject<any>()
  editprice=new Subject<any>()
  editindex=new Subject<any>()
  editmode=new Subject<any>()
  editdata=new BehaviorSubject<any>([])
}
