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
        'authorization': "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbmF3YWhlZWRAZ21haWwuY29tIiwiaWQiOiI2MGJmYzZhNDczNDY5ZjAwMmU4NGRhMGIiLCJpYXQiOjE2MjM5MjM5MTksImV4cCI6MTYyNDAxMDMxOX0.DewOuZxEgMPlXosBQzMT8wlzhd44gdjNo1dfsc6xL7o"
      })

      this.http.get(this.apiCategory,{headers}).subscribe((c:any)=>{
        this.Categories=c?.result;
        this.categoryLoad.next([...this.Categories]);
    })

    }

    getSubCategoryOfMaincategory(categorId){
      let headers = new HttpHeaders({
        'authorization': "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbmF3YWhlZWRAZ21haWwuY29tIiwiaWQiOiI2MGJmYzZhNDczNDY5ZjAwMmU4NGRhMGIiLCJpYXQiOjE2MjM5MjM5MTksImV4cCI6MTYyNDAxMDMxOX0.DewOuZxEgMPlXosBQzMT8wlzhd44gdjNo1dfsc6xL7o"
      })
     return this.http.get(this.apiCategory+"/"+categorId,{headers});
    }
}
