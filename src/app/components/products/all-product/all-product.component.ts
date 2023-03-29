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

  getThisProduct(user: any): void {
    console.log(user);
    this.thisProduct = user;
  }

  editProduct(id: string) {
    this.router.navigate(['/update-use/' + id]);
  }

  deleteProduct(id: string) {
    this.router.navigate(['/delete-use/' + id]);
  }

  searchProduct(){
    // this.productsService.getProduct(this.searchBarValue).subscribe((response)=>{
    //   console.log(response);
    //   this.productsList = response;
    // })
    this.productsList = this.productsList.filter(product => product.name == this.searchBarValue)
    console.log(this.productsList)
  }

  getInputValue(e:any){
    this.searchBarValue = e.target.value
  }

}
