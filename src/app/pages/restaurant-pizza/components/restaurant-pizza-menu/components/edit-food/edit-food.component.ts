import { Component, Input } from '@angular/core';
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

  @Input() item: any;


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
      this.editForm = this.formBuilder.group({
        _id: [''],
        name: [''],
        price:  [''],
        ingredients: [''],
        image: [''],
        category: [''],
        vegetarian: [''],
        restaurant: ['']
      });

    }


  ngOnInit():void{
    this.editForm.get('_id')?.setValue(this.item._id);
    this.editForm.get('name')?.setValue(this.item.name);
    this.editForm.get('price')?.setValue(this.item.price);
    this.editForm.get('ingredients')?.setValue(this.item.ingredients);
    this.editForm.get('image')?.setValue(this.item.image);
    this.editForm.get('category')?.setValue(this.item.category);
    this.editForm.get('vegetarian')?.setValue(this.item.vegetarian);
    this.editForm.get('restaurant')?.setValue(this.item.restaurant);
  }


  editingProduct(productId: any) {
    this.productService.editThisProduct(this.editForm.value, productId).subscribe(() => {
      window.location.reload();
    })
  }


}
