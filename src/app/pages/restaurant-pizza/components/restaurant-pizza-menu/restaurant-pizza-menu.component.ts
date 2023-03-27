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



  constructor (
    private productsService: ProductsService,
    public authService: AuthService
    ) {}

  ngOnInit():void{

}

  public getProducts(newState:number):void{

    this.productsService.getProducts().subscribe((response)=>{
      this.productList = response;
      this.plates = this.productList.filter(product => product.category === 'pizzas' )
      this.drinks = this.productList.filter(drink => drink.category === 'bebidas' )
      this.showSection = newState;
    });
  }

  public triggerDeleteConfrimation(newState: boolean): void {
    this.deleteConfirmation = newState;

  }


}
