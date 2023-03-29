import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteThisProductComponent } from './delete-this-product.component';

describe('DeleteThisProductComponent', () => {
  let component: DeleteThisProductComponent;
  let fixture: ComponentFixture<DeleteThisProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteThisProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteThisProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
