import { ProductsService } from './../../../core/services/products.service';
import { Component } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {

  public name: string = '';

  constructor (
    private activatedRoute: ActivatedRoute,
    private RequestService: ProductsService

    ) {}

    ngOnInit():void{
      //Create the route for the drink id
          this.activatedRoute.paramMap.subscribe((params) => {
            this.name = params.get('name') as string;
          });
          this.activatedRoute.queryParamMap.subscribe((queryParams) => {
            console.log(queryParams);
          });
          this.RequestService.getProduct(this.name).subscribe(
            (response:Product) => {
              console.log(response)
            });

            console.log(this.name);
        }




}
