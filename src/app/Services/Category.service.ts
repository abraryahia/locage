
import { Injectable } from '@angular/core';
import { Category } from '../Models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

constructor() { }

Categories:Category[] = [
  {
    main: 'Supermarket',
    sub: [
      'food cupboard',
      'beverages',
      'canned,jarred&packaged foods',
      'laundry',
      'beverages',
      'breakfast foods',
      'household cleaning',
    ],
    icon: 'fas fa-store',
    image:null,
  },
  {
    main: 'Fashion',
    sub: [`women's fashion`, `men's fashion`, `kid's fashion`],
    icon: 'fas fa-tshirt',
    image:null,
  },
  {
    main: 'Health & Beauty',
    sub: [
      'Beauty & Personal care',
      `Makeup`,
      `Hair care`,
      `Fragrance`,
      `Health care`,
    ],
    icon: 'fas fa-heart',
    image:null,
  },
  {
    main: 'Home & office',
    sub: [
      `Home & kitchen`,
      `Office products`,
      ` Heating,Cooling & Air quality`,
      `Tools & Home improvement`,
      `Small appliances`,
      `Appliances`,
      `Cooking appliances`,
    ],
    icon: 'fas fa-couch',
    image:null,
  },
  {
    main: 'Electronics',
    sub: [
      `TV/Video`,
      `Home audio`,
      `Cameras`,
      `Headphones`,
      `Phones & Tablets`,
    ],
    icon: 'fas fa-lightbulb',
    image:null,
  },
  {
    main: 'Computing',
    sub: [
      'Laptops',
      'Computer components',
      'Networking products',
      'Data storage',
      'Computer accessories',
    ],
    icon: 'fas fa-desktop',
    image:null,
  },
  {
    main: 'Sporting Goods',
    sub: [
      'Sports wear',
      'Sports equipment',
      'Outdoor & Adventure',
      'Accessories',
    ],
    icon: 'fas fa-football-ball',
    image:null,
  },
  {
    main: 'Gaming',
    sub: ['Video gaming', 'Arts/Crafts', 'Puppets', 'Scooters & Wagons'],
    icon: 'fas fa-gamepad',
    image:null,
  },
  {
    main: 'Automobile',
    sub: [
      'Car care',
      'Oils/Fluids',
      'Interior accessories',
      'Exterior accessories',
    ],
    icon: 'fas fa-car',
    image:null,
  },
];

  getCategory():Category[]{
    return [...this.Categories ];
  }


}
