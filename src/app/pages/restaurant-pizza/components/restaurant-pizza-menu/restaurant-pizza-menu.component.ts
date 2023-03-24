import { ProductApiResponse } from './../../../../core/models/product';
import { Component } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-restaurant-pizza-menu',
  templateUrl: './restaurant-pizza-menu.component.html',
  styleUrls: ['./restaurant-pizza-menu.component.scss']
})
export class RestaurantPizzaMenuComponent {

  productList: Product[] = [];
  plates: Product[] = [];
  drinks: Product[] = [];

  constructor (private productsService: ProductsService) {}

  ngOnInit():void{
    this.getProducts()
}

  private getProducts():void{

    this.productsService.getProducts().subscribe((response)=>{
      this.productList = response;
      this.plates = this.productList.filter(product => product.category === 'Pizzas' )
      this.drinks = this.productList.filter(drink => drink.category === 'Bebidas' )
      console.log(this.plates);
    });

  }


}
