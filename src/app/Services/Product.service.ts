import { Product } from './../Models/Product';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

constructor(private http:HttpClient) { }
products:Product[]=[];
private productsLoad= new Subject<Product[]>();

private readonly api ='https://locage.herokuapp.com/api/v1/products';



getProducts(){
  let headers = new HttpHeaders({
    'authorization': "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbmF3YWhlZWRAZ21haWwuY29tIiwiaWQiOiI2MGJmYzZhNDczNDY5ZjAwMmU4NGRhMGIiLCJpYXQiOjE2MjMzNTM2MDEsImV4cCI6MTYyMzQ0MDAwMX0.59HH7MarvpRuJoXJVZ-2yAvC9Fvaw_kiTp1o1sXzIu8"
  })
  return this.http.get<{product:Product[]}>(this.api+'/vendor?page=1&limit=10',{headers})
  .pipe(map((pro:any)=>{
    return pro?.result?.docs.map((p:any)=>{
      return{
      _id : p._id,
      title:p.title,
      color:p.color,
      description:p.description,
      price:p.price,
      subcategory:p.subcategoryId,
      vendor:p.vendorId,
      sku:p.sku,
      quantity:p.quantity,
      size:p.size,
      Weight:p.Weight,
      photos:p.photos,
      rating:p.rating,
      discount:p.discount,
      discountDate:p.discountDate,
      brand:p.brand,
      productSpecifications:p.productSpecifications

      }
    })
  }))
  .subscribe((p)=>{

  console.log(p);
  this.products = p;
    this.productsLoad.next( [...this.products]);
  });
}

private getHeadders( incomingHeaders?: HttpHeaders ): { headers: HttpHeaders; } {


  return {
      headers: incomingHeaders
          ? incomingHeaders
          : new HttpHeaders({
                Authorization:
                    "Bearer " + localStorage.getItem("token"),

            }),
      // observe: "response",
  };
}
//https://locage.herokuapp.com/api/v1/products/:id

getProductById(id){
  let product;
  let headers = new HttpHeaders({
    'authorization': "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbmF3YWhlZWRAZ21haWwuY29tIiwiaWQiOiI2MGJmYzZhNDczNDY5ZjAwMmU4NGRhMGIiLCJpYXQiOjE2MjMzNTM2MDEsImV4cCI6MTYyMzQ0MDAwMX0.59HH7MarvpRuJoXJVZ-2yAvC9Fvaw_kiTp1o1sXzIu8"
  })
return this.http.get<{product:Product}>(this.api+'/'+id,{headers});
  // this.products.find((d)=>d.id == id);
}

addProduct(_product:FormData){
  let headers = new HttpHeaders({
    'authorization': "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbmF3YWhlZWRAZ21haWwuY29tIiwiaWQiOiI2MGJmYzZhNDczNDY5ZjAwMmU4NGRhMGIiLCJpYXQiOjE2MjMzNTM2MDEsImV4cCI6MTYyMzQ0MDAwMX0.59HH7MarvpRuJoXJVZ-2yAvC9Fvaw_kiTp1o1sXzIu8"
  })
 this.http.post<{message:string,result:Product}>(this.api,_product,{headers}).subscribe((data)=>{
       this.products.push(data.result);
      this.productsLoad.next([...this.products]);
      console.log(data);

  },(error)=>{
    console.log(error);

  })

}

getProductsWithoutLoad(){
  return this.productsLoad.asObservable();
}

editProduct(_product:Product){

  let headers = new HttpHeaders({
    'authorization': "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbmF3YWhlZWRAZ21haWwuY29tIiwiaWQiOiI2MGJmYzZhNDczNDY5ZjAwMmU4NGRhMGIiLCJpYXQiOjE2MjMzNTM2MDEsImV4cCI6MTYyMzQ0MDAwMX0.59HH7MarvpRuJoXJVZ-2yAvC9Fvaw_kiTp1o1sXzIu8"
  })
  this.http.patch(this.api +'/'+ _product._id,_product,{headers}).subscribe((res)=>{
    console.log(res);
    
    //  const updateproducts=[...this.products];
    //  let oldIndex= updateproducts.findIndex((i)=>i.id == _product.id);
    //    updateproducts[oldIndex]=_product;
    //    this.products= updateproducts;
    //    this.productsLoad.next([...this.products]);
  })

}
deletProduct(id){
  let headers = new HttpHeaders({
    'authorization': "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbmF3YWhlZWRAZ21haWwuY29tIiwiaWQiOiI2MGJmYzZhNDczNDY5ZjAwMmU4NGRhMGIiLCJpYXQiOjE2MjMzNTM2MDEsImV4cCI6MTYyMzQ0MDAwMX0.59HH7MarvpRuJoXJVZ-2yAvC9Fvaw_kiTp1o1sXzIu8"
  })
 this.http.delete(this.api+'/'+id,{headers}).subscribe(()=>{
  let updatedproduct= this.products.filter((i)=>i._id !== id);
  this.products=updatedproduct;
  this.productsLoad.next([...this.products]);
 })

}

deletePhoto(idProduct,url){
  let headers = new HttpHeaders({
    'authorization': "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbmF3YWhlZWRAZ21haWwuY29tIiwiaWQiOiI2MGJmYzZhNDczNDY5ZjAwMmU4NGRhMGIiLCJpYXQiOjE2MjM0MzYyODEsImV4cCI6MTYyMzUyMjY4MX0.g2l81CHC6kmYwXDxVg1lqXRI68KyItdhPgQ0oZ5oJGI"
  })

  this.http.patch(this.api+'/'+ idProduct+'/manage-photos/'+url,{headers}).subscribe((res:any)=>{
    
    this.products =  this.products.map((pro)=>{
      if (pro._id == res.result._id) {
        pro = res.result;
      }
      return pro;
    });

  this.productsLoad.next([...this.products]);
  })
}


}
