import { Offer } from './../offer';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators , FormGroup} from '@angular/forms';


@Component({
  selector: 'app-add-new-offer',
  templateUrl: './add-new-offer.component.html',
  styleUrls: ['./add-new-offer.component.css']
})
export class AddNewOfferComponent implements OnInit {

  newOfferForm: any;

  constructor(private formBuilder: FormBuilder) {
    this.newOfferForm.FormBuilder.group({
      name: [''],
      description: [''],
      price: [''],
    });
   }

  ngOnInit(): void {
  }

  getName(){
    return this.newOfferForm.get('name');
  }

  getDescription(){
    return this.newOfferForm.get('description');
  }

  getPrice(){
    return this.newOfferForm.get('price');
  }

  offerList: Offer[] = [];

  saveOffer(){
    console.log(this.newOfferForm.value);
  }
}
