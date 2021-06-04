import { Product } from './../Models/Product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

constructor() { }
products:Product[]=[]

getProducts(): Product[]{
  return [...this.products];
}



}
