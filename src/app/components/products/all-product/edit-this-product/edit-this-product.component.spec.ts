import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditThisProductComponent } from './edit-this-product.component';

describe('EditThisProductComponent', () => {
  let component: EditThisProductComponent;
  let fixture: ComponentFixture<EditThisProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditThisProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditThisProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
