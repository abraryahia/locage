import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from '../Models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private readonly api ='https://locage.herokuapp.com/api/v1/orders/vendor';
  private ordersLoad= new Subject<Order[]>();
  orders:Order[]=[];
constructor(private http:HttpClient) { }

getOrdersVendor(){
  let headers = new HttpHeaders({
    'authorization': "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbmF3YWhlZWRAZ21haWwuY29tIiwiaWQiOiI2MGJmYzZhNDczNDY5ZjAwMmU4NGRhMGIiLCJpYXQiOjE2MjQzODM3OTMsImV4cCI6MTYyNDQ3MDE5M30.23IQ4paGgGGpyahtwlq_plD-nlsBI1PML53LxYgTFWs"
  })
 return this.http.get(this.api,{headers}).pipe(map((or:any)=>{
    return or?.result?.docs.map((o:any)=>{
         console.log(o);

        return {
          _id:o._id,
          product_name:o?.productId?.title,
          price:o.price,
          quantity:o.quantity,
          statuse:o?.orderId?.status,


        }


    })
 })).subscribe((order)=>{
    console.log(order);
    this.orders=[...order];
    this.ordersLoad.next([...this.orders]);

 })
}

getOrdersWithoutLoad(){
  return this.ordersLoad.asObservable();
}
}
