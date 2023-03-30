import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-delete-this-product',
  templateUrl: './delete-this-product.component.html',
  styleUrls: ['./delete-this-product.component.scss']
})
export class DeleteThisProductComponent {

  deleteForm!: FormGroup;

  @Input() product: any = {}


  constructor(
    public fb: FormBuilder,
    public productService: ProductsService,
    public router: Router,
    public actRoute: ActivatedRoute,
  ) {
    this.deleteForm = this.fb.group({
      _id:['']
    })
  }

  ngOnInit(): void {
    this.deleteForm.get('_id')?.setValue(this.product._id);
  }

  deletingThisProduct(id: any): void {
    this.productService.deleteThisProduct(id).subscribe(() => {
      window.location.reload();
    })
  }

}
