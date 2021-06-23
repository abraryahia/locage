import { OrderStatus } from "./OrderStatus.enum";

export interface Order {

  _id:any;
  product_name:string;
  quantity:number;
  price:number;
  statuse:OrderStatus;


}
