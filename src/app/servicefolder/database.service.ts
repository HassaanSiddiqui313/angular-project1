import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http:HttpClient) { }
  url='https://products-data-78bbd-default-rtdb.firebaseio.com/products.json';
  saveproducts(products:any[]){
  //  return this.http.post(this.url,products);
   return this.http.put(this.url,products);
  }
  saveproducts2(products:any){
   return this.http.post('https://products-data-78bbd-default-rtdb.firebaseio.com/products2.json',products);
  }
  fetchdata(){
    return this.http.get(this.url);
  }
  fetchdata2(){
    return this.http.get('https://products-data-78bbd-default-rtdb.firebaseio.com/products2.json');
  }
  headerdata(){
    return this.http.get('https://products-data-78bbd-default-rtdb.firebaseio.com/headerdata.json');
  }
}
