import { Offer } from './../offer';
import { OfferServiceService } from '../offer-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-new-offer',
  templateUrl: './add-new-offer.component.html',
  styleUrls: ['./add-new-offer.component.css']
})
export class AddNewOfferComponent implements OnInit {

  name: string = "";
  description: string = "";
  price: string = "";

  newOfferForm: any;

  constructor(private offerService: OfferServiceService) {}

  ngOnInit(): void {
  }

  inputName(value: string){
    this.name = value;
  }
  inputDescription(value: string){
    this.description = value;
  }
  inputPrice(value: string){
    this.price = value;
  }
  addOfferPressed(){
    console.log(`${this.name} ${this.description} ${this.price}`);
    this.offerService.pushOffer(this.name,this.description,this.price);
  }
}
