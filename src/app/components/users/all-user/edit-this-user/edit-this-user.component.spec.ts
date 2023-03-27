import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditThisUserComponent } from './edit-this-user.component';

describe('EditThisUserComponent', () => {
  let component: EditThisUserComponent;
  let fixture: ComponentFixture<EditThisUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditThisUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditThisUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
