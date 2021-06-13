import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../Models/Category';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

constructor(private http:HttpClient) { }

Categories:Category[] = [];
private categoryLoad= new Subject<Category[]>();
private readonly apiCategory="https://locage.herokuapp.com/api/v1/category";

  getCategoryWithoutLoad(){
    return this.categoryLoad.asObservable();
  }
    getAllCategory(){

      let headers = new HttpHeaders({
        'authorization': "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbmF3YWhlZWRAZ21haWwuY29tIiwiaWQiOiI2MGJmYzZhNDczNDY5ZjAwMmU4NGRhMGIiLCJpYXQiOjE2MjM1OTAyNjcsImV4cCI6MTYyMzY3NjY2N30.M0MB35G-CQTdBUytFju8clVFMWQOjyQp3usmZR9xI-U"

      })

      this.http.get(this.apiCategory,{headers}).subscribe((c:any)=>{
        this.Categories=c?.result;
        this.categoryLoad.next([...this.Categories]);
    })

    }

    getSubCategoryOfMaincategory(categorId){
      let headers = new HttpHeaders({
        'authorization': "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbmF3YWhlZWRAZ21haWwuY29tIiwiaWQiOiI2MGJmYzZhNDczNDY5ZjAwMmU4NGRhMGIiLCJpYXQiOjE2MjM1OTAyNjcsImV4cCI6MTYyMzY3NjY2N30.M0MB35G-CQTdBUytFju8clVFMWQOjyQp3usmZR9xI-U"

      })
     return this.http.get(this.apiCategory+"/"+categorId,{headers});
    }
}
