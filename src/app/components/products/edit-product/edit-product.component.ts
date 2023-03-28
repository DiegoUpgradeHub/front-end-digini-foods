import { Component } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './../../../core/services/products.service';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';



@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {

  public name: string = '';
  public product!: Product;


  public editForm!:FormGroup;


  constructor (
    public formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private RequestService: ProductsService
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
          this.RequestService.getProduct(this.name).subscribe(
            (response) => {
              this.product = response[0];
              console.log(response[0]);

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



}
