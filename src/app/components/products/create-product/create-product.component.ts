import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {

  createForm!: FormGroup;

  constructor(
    public fb: FormBuilder,
    public productsService: ProductsService,
    public router: Router,
    public actRoute: ActivatedRoute
  ) {
    this.createForm = this.fb.group({
      name: [''],
      price: [''],
      ingredients: [''],
      image: [''],
      category: [''],
      vegetarian: [''],
      restaurant: [''],
    })
  }

  ngOnInit(): void {}

  creatingProduct() {
    this.productsService.createProduct(this.createForm.value).subscribe(() => {
      window.location.reload();
    })
  }

}
