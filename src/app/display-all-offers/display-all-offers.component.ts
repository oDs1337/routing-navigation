import { OFFERS } from './../mock-offers';
import { Offer } from './../offer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-all-offers',
  templateUrl: './display-all-offers.component.html',
  styleUrls: ['./display-all-offers.component.css']
})
export class DisplayAllOffersComponent implements OnInit {

  offerList: Offer[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getOffers();
  }

  getOffers(): void{
    this.offerList = OFFERS;
  }

}
