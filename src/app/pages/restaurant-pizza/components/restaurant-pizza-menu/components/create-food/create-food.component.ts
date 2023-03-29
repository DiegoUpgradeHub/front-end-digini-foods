import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-create-food',
  templateUrl: './create-food.component.html',
  styleUrls: ['./create-food.component.scss']
})
export class CreateFoodComponent {

  public createForm!: FormGroup;

  constructor(
    public fromBuilder:FormBuilder,
    public router:Router,
    public productService: ProductsService
  ) {
    this.createForm = new FormGroup ({
      name: new FormControl (''),
      price:  new FormControl (''),
      ingredients: new FormControl (''),
      image: new FormControl (''),
      category: new FormControl (''),
      vegetarian: new FormControl (''),
      restaurant: new FormControl ('')
    });



  }


  ngOnInit():void{}

  onSubmit(e:any){
    console.log(this.createForm.value)
  }

  creatingProduct() {
    this.productService.createProduct(this.createForm.value).subscribe(()=>{
      this.router.navigate(['/restaurant-pizza']);
    })
  }


}
