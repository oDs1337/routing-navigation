import { Offer } from './../offer';
import { OfferServiceService } from '../offer-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-all-offers',
  templateUrl: './display-all-offers.component.html',
  styleUrls: ['./display-all-offers.component.css']
})
export class DisplayAllOffersComponent implements OnInit {

  offerList: Offer[] = [];

  constructor(private offerService: OfferServiceService) { }

  ngOnInit(): void {
    this.getOffers();
  }

  getOffers(): void{
    this.offerService.getOffers()
          .subscribe(offers => this.offerList = offers);
  }

}
