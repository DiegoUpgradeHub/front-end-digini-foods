import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteThisUserComponent } from './delete-this-user.component';

describe('DeleteThisUserComponent', () => {
  let component: DeleteThisUserComponent;
  let fixture: ComponentFixture<DeleteThisUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteThisUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteThisUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
