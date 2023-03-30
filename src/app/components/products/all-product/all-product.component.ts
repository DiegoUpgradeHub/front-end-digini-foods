import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Subject, takeUntil } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss']
})
export class AllProductComponent {

  productsList: Product[] = [];
  editForm!: FormGroup;

  thisProduct: any = {};

  searchBarValue!: string;


  constructor(
    public fb: FormBuilder,
    private productsService: ProductsService,
    public router: Router,
    public authService: AuthService,
    public actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void{
    this.productsService.getProducts().subscribe((response)=>{
      this.productsList = response;
    });
  }

  getThisProduct(product: any): void {
    console.log(product);
    this.thisProduct = product;
  }
  //Editar el producto
  editProduct(id: string) {
    this.router.navigate(['/update-use/' + id]);
  }
  //Eliminar el producto
  deleteProduct(id: string) {
    this.router.navigate(['/delete-use/' + id]);
  }
  //Buscar un producto
  searchProduct(){
    this.productsList = this.productsList.filter(product => product.name == this.searchBarValue)
    console.log(this.productsList)
  }
  //Obtener información del input del searchbar
  getInputValue(e:any){
    this.searchBarValue = e.target.value
  }
  //Obetener productos de La Pizzetta
  getPizzeria(){
    this.productsList = this.productsList.filter(product => product.restaurant == 'pizzeria');
  }
  //Obetener productos de Sushi Saki
  getSushi(){
    this.productsList = this.productsList.filter(product => product.restaurant == 'sushi');
  }
  //Obetener productos de Brunch & Munch
  getBrunch(){
    this.productsList = this.productsList.filter(product => product.restaurant == 'brunch');
  }
  //Obetener productos categoría plates
  getPlates(){
    this.productsList = this.productsList.filter(product => product.category == 'plates');
  }
  //Obetener productos categoría drinks
  getDrinks(){
    this.productsList = this.productsList.filter(product => product.category == 'drinks');
  }

}
