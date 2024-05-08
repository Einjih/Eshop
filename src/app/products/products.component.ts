import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

products = [
  {id:1, name: 'Voanjobory', price:'200', color:'Pink', available:'Available',image:'/assets/products/voanjobory.jpg'},
  {id:2, name: 'Tsaramaso', price:'300', color:'Red', available:'Not Available',image:'/assets/products/tsaramaso.jpg'},
  {id:3, name: 'Karoty', price:'100', color:'Orange', available:'Available',image:'/assets/products/karoty.jpg'},
  {id:4, name: 'Vary', price:'900', color:'White', available:'Not Available',image:'/assets/products/vary.jpg'},
  {id:5, name: 'Akondro', price:'500', color:'Yellow', available:'Available',image:'/assets/products/akondro.jpg'},
  {id:6, name: 'Voasary', price:'400', color:'Orange', available:'Available',image:'/assets/products/voasary.jpg'},
]

}
