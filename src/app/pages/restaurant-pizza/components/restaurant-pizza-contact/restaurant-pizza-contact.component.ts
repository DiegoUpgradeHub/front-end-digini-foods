import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Contact } from 'src/app/core/models/contact';


@Component({
  selector: 'app-restaurant-pizza-contact',
  templateUrl: './restaurant-pizza-contact.component.html',
  styleUrls: ['./restaurant-pizza-contact.component.scss']
})
export class RestaurantPizzaContactComponent {

  public contact: Contact = {
    name: '',
    email:'',
    description:''
  };

  public isSubmitted: boolean = false;
  public isLoading: boolean = false;

  onSubmit(contactForm: NgForm): void {
    this.isSubmitted = true;
    const formGroup = contactForm.form;
    console.log(formGroup);

    if (contactForm.form.valid) {
      this.isLoading = true;

      const contact = {
        contactId: Math.floor(Math.random() * 100),
        name: formGroup.get('name')?.value,
        phoneNumber: formGroup.get('phoneNumber')?.value,
        email: formGroup.get('email')?.value,
        description: formGroup.get('description')?.value,
      };

      console.log(contact);
      // API call
      setTimeout(() => {
        formGroup.reset();
        this.isLoading = false;
      }, 3000);
    }
  }

}
