import { Component, OnInit } from '@angular/core';
import { Product } from '../../../Models/Product';
import { ProductService } from '../../../Services/Product.service';

@Component({
  selector: 'app-ManageImage',
  templateUrl: './ManageImage.component.html',
  styleUrls: ['./ManageImage.component.scss']
})
export class ManageImageComponent implements OnInit {

  //* My Variables
  allProducts:Product[]=[];
  constructor(private productservices:ProductService) {


   }

  ngOnInit() {
    if (this.productservices.products.length == 0) {
      this.productservices.getProducts()
    }

    this.allProducts=this.productservices.products;

    this.productservices.getProductsWithoutLoad().subscribe((pro)=>{
      console.log(pro)
      this.allProducts=pro;
    })

  }

  updatImage(event,indexProduct,indexPhoto){

   let photo=(URL.createObjectURL(event.target.files[0] as File));
   this.allProducts[indexProduct].photos[indexPhoto]=photo;
   this.productservices.editProduct(this.allProducts[indexProduct]);
  }



deleteImage(indexProduct,indexPhoto){
  let pro = this.allProducts[indexProduct]._id;
  let file = this.allProducts[indexProduct].photos[indexPhoto];
  this.allProducts[indexProduct].photos.splice(indexPhoto,1);
  
 // this.productservices.editProduct(this.allProducts[indexProduct]);
 this.productservices.deletePhoto(pro,file);
}


}
