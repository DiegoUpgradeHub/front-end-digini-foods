import { Component } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.scss']
})
export class EditFoodComponent {

  public name: string = '';
  public product!: Product;
  public editedProduct:any = {};


  public editForm!:FormGroup;


  constructor (
    public formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService,
    private router: Router
    ) {
      this.editForm = new FormGroup ({
        _id: new FormControl (''),
        name: new FormControl (''),
        price:  new FormControl (''),
        ingredients: new FormControl (''),
        image: new FormControl (''),
        category: new FormControl (''),
        vegetarian: new FormControl (''),
        restaurant: new FormControl (''),
      });
    }



    ngOnInit():void{
          this.activatedRoute.paramMap.subscribe((params) => {
            this.name = params.get('name') as string;
          });
          this.activatedRoute.queryParamMap.subscribe((queryParams) => {
          });
          this.productService.getProduct(this.name).subscribe(
            (response) => {
              this.product = response[0];
              console.log(response[0]);
              this.editForm.get('_id')?.setValue(this.product._id);
              this.editForm.get('name')?.setValue(this.product.name);
              this.editForm.get('price')?.setValue(this.product.price);
              this.editForm.get('ingredients')?.setValue(this.product.ingredients);
              this.editForm.get('image')?.setValue(this.product.image);
              this.editForm.get('category')?.setValue(this.product.category);
              this.editForm.get('vegetarian')?.setValue(this.product.vegetarian);
              this.editForm.get('restaurant')?.setValue(this.product.restaurant);
            });
        }



          onSubmit(e:any){
            e.preventDefault();
            console.log(this.editForm);
          }

          editingProduct(productId: any) {
            this.editedProduct = this.editForm.value;
            console.log(this.editedProduct);
            this.productService.editProduct(this.editedProduct).subscribe(() => {
              this.router.navigate(['/restaurant-pizza']);
            })
          }


}
