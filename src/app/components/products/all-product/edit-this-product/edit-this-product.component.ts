import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-edit-this-product',
  templateUrl: './edit-this-product.component.html',
  styleUrls: ['./edit-this-product.component.scss']
})
export class EditThisProductComponent {

  editProductForm!: FormGroup;

  @Input() product: any;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public productService: ProductsService,
    public router: Router,
    public actRoute: ActivatedRoute
  ) {
    this.editProductForm = this.fb.group({
      _id:[''],
      name: [''],
      price: [''],
      ingredients: [''],
      image: [''],
      category: [''],
      vegetarian: [''],
      restaurant: [''],
    })
  }

  ngOnInit(): void {
    this.editProductForm.get('_id')?.setValue(this.product._id);
    this.editProductForm.get('name')?.setValue(this.product.name);
    this.editProductForm.get('price')?.setValue(this.product.price);
    this.editProductForm.get('ingredients')?.setValue(this.product.ingredients);
    this.editProductForm.get('image')?.setValue(this.product.image);
    this.editProductForm.get('category')?.setValue(this.product.category);
    this.editProductForm.get('vegetarian')?.setValue(this.product.vegetarian);
    this.editProductForm.get('restaurant')?.setValue(this.product.restaurant);
    console.log(this.product)
  }

  editingProduct(productId: any) {
    this.productService.editProduct(this.editProductForm.value).subscribe(() => {
      this.authService.userProfile();
    })
  }

}
