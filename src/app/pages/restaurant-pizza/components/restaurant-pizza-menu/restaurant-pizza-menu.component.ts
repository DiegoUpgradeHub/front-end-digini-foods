import { Component } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { ProductsService } from 'src/app/core/services/products.service';
import { AuthService } from 'src/app/core/services/auth.service';



@Component({
  selector: 'app-restaurant-pizza-menu',
  templateUrl: './restaurant-pizza-menu.component.html',
  styleUrls: ['./restaurant-pizza-menu.component.scss']
})
export class RestaurantPizzaMenuComponent {

  productList: Product[] = [];
  plates: Product[] = [];
  drinks: Product[] = [];
  showSection: number = 0;
  deleteConfirmation:boolean = false;


  productInfo: any = {}


  constructor (
    private productsService: ProductsService,
    public authService: AuthService
    ) {}



  public getProducts(newState:number):void{

    this.productsService.getProducts().subscribe((response)=>{
      this.productList = response;
      this.plates = this.productList.filter(product => product.category === 'pizzas'  )
      this.drinks = this.productList.filter(drink => drink.category ===  'drinks' )
      console.log(this.productList)
      this.showSection = newState;
    });
  }

  public triggerDeleteConfrimation(newState: boolean): void {
    this.deleteConfirmation = newState;
  }

  //Recojo el objeto del plato y lo guardo en una variable
  getProductInfo(plate:any): void {
    this.productInfo = plate;
    console.log(this.productInfo);
  }


}
