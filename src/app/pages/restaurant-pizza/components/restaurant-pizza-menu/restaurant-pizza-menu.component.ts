import { Component } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { ProductsService } from 'src/app/core/services/products.service';

import {DataSource} from '@angular/cdk/collections';

@Component({
  selector: 'app-restaurant-pizza-menu',
  templateUrl: './restaurant-pizza-menu.component.html',
  styleUrls: ['./restaurant-pizza-menu.component.scss']
})
export class RestaurantPizzaMenuComponent {

  productList: Product[] = [];
  plates: Product[] = [];
  drinks: Product[] = [];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  constructor (private productsService: ProductsService) {}

  ngOnInit():void{
    this.getProducts()
}

  private getProducts():void{

    this.productsService.getProducts().subscribe((response)=>{
      this.productList = response;
      this.plates = this.productList.filter(product => product.category === 'pizzas' )
      this.drinks = this.productList.filter(drink => drink.category === 'bebidas' )
      console.log(this.plates);
    });

  }


}
