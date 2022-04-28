import { Offer } from './offer';
import { OFFERS } from './mock-offers';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferServiceService {

  constructor() { }

  getOffers(): Observable<Offer[]>{
    //const offers = of(OFFERS);
    return of(OFFERS);
  }
  pushOffer(name: string, description: string, price: string){
    OFFERS.push({name,description,price});
  }
}
