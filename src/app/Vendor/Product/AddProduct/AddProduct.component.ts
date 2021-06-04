import { CustomValidator } from './../../../common_validator/CustomValidator';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { CategoryService } from './../../../Services/Category.service';
import { Category } from './../../../Models/Category';
import { Product } from './../../../Models/Product';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { ProductService } from '../../../Services/Product.service';
import { NbDateService } from '@nebular/theme';
import { NbWindowService } from '@nebular/theme';
import * as moment from 'moment';

@Component({
  selector: 'app-AddProduct',
  templateUrl: './AddProduct.component.html',
  styleUrls: ['./AddProduct.component.scss']
})
export class AddProductComponent implements OnInit {

  //list of steper
  list = [
    "chooses Category",
    "product Inforamtion",
    "More product information",
    "product Prices",
    "Images"
  ]

  // this object empty to fill with data ^_^
  product: Product = {
    id: null,
    title: null,
    color: [],
    description: null,
    price: null,
    subcategory: null,
    vendor: null,
    sku: null,
    quantity: null,
    size: null,
    Weight: null,
    photos: [],
    rating: null,
    UnitePerOrder: null,
    discount: null,
    brand: null,
    proudactSpecification: null,
    discountDate: null,

  };
  dataRange
  selectedMainCategory: Category = null;
  Selectedsubcategory: Category = null;
  Categories: Category[];
  Colors: any[] = [];
  customColor: string[] = ["red", "black", "green", "blue"] //this array to custom color
  images: string[] = [];
  startDate: any = null;
  endDate: any = null;
  dates: string[] = [];
  selectedColor = null;  //colorpacker

  min: Date;  //min range
  max: Date;  //max range

  product_Inforamtion: FormGroup;
  product_price: FormGroup;


  //*================================ end of variables ==============================*/




  constructor(private _ctegory: CategoryService,
    private _product: ProductService,
    protected dateService: NbDateService<Date>,
    private window: NbWindowService,
    private fb: FormBuilder) {

    /*-------------------------------- validation for product information  ------------------------------*/

    this.product_Inforamtion = this.fb.group({
      productName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(60), CustomValidator.checkSpaceInInput]],

      productDescription: ['', [Validators.required, Validators.minLength(50), Validators.maxLength(200), CustomValidator.checkSpaceInInput]],

      brand: ['', [Validators.required, CustomValidator.checkSpaceInInput]],

      size: ['', [Validators.required, CustomValidator.checkSpaceInInput]],

      weight: ['', [Validators.required, CustomValidator.checkSpaceInInput]],

      quantity: ['', [Validators.required, Validators.min(1)]],

      sku: ['', [Validators.minLength(5), CustomValidator.checkSpaceInInput]]
    })

    /*================================ validation for product price ==============================*/


    this.product_price = this.fb.group({
      price: ['', [Validators.required, Validators.min(1)]],
      discount: [null, [Validators.min(2)]],
      discountdate: ['', [CustomValidator.checkSpaceInInput]]
    })

  }

  ngOnInit() {


    this.Categories = this._ctegory.getCategory();
    /**========================================================================
     *                         to add range in datepacker
     *========================================================================**/
    this.min = this.dateService.addMonth(this.dateService.today(), 0);
    this.max = this.dateService.addMonth(this.dateService.today(), 2);
  }
  handleDateChange(event) {
    console.log('ev', event);
    console.log('----------');

    let start = moment.utc(event.start, "DD-MM-YYYY", true).toDate().toLocaleDateString();
    this.startDate = start;
    let end = moment.utc(event.end, "DD-MM-YYYY", true).toDate().toLocaleDateString();
    this.endDate = end;
    this.dates.push(this.startDate);
    this.dates.push(this.endDate);
    console.log('array', this.dates);
    // console.log('----------');
    // console.log(this.startDate);
    // console.log('----------');
    // console.log(this.endDate);

  }



  /*================================ Color Window ==============================*/

  openWindowForm(color) {
    this.window.open(color, { title: `Choose Color` });
  }

  changeColorHandeler(_color) {
    this.selectedColor = _color;
  }

  addColor() {
    if (!this.Colors.includes(this.selectedColor)) {
      this.Colors.push(this.selectedColor);
    }
  }

  deleteColor() {
    this.Colors = [];
  }

  removeColor(_color) {
    this.Colors.splice(_color, 1);

  }


  /*================================ end of color ==============================*/

  /*================================ image upload ==============================*/

  previewImge(event) {

    let file = event.target.files[0] as File;

    this.images.push(URL.createObjectURL(file));

  }

  deleteImage(_img) {
    this.images.splice(_img, 1);
  }

  /*================================ end image upload ==============================*/

  /*================================ get form Control for product ==============================*/


  get ProductName(): any {
    return this.product_Inforamtion.get('productName');
  }

  get ProductDescription(): any {
    return this.product_Inforamtion.get('productDescription');
  }

  get Brand(): any {
    return this.product_Inforamtion.get('brand');
  }

  get Size(): any {
    return this.product_Inforamtion.get('size');
  }

  get Weight(): any {
    return this.product_Inforamtion.get('weight');
  }

  get Quantity(): any {
    return this.product_Inforamtion.get('quantity');
  }

  get Sku(): any {
    return this.product_Inforamtion.get('sku');
  }


  get Price(): any {
    return this.product_price.get('price');
  }
  get Discount(): any {
    return this.product_price.get('discount');
  }

  get DiscountDate(): any {
    return this.product_price.get('discountdate');
  }



  showdata(data) {

    console.log(data);
  }

}
