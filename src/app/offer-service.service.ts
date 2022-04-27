import { Offer } from './offer';
import { OFFERS } from './mock-offers';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfferServiceService {

  constructor() { }

  getOffers(): Offer[]{
    return OFFERS;
  }
  pushOffer(name: string, description: string, price: string){
    OFFERS.push({name,description,price});
  }
}
