import { DisplayAllOffersComponent } from './display-all-offers/display-all-offers.component';
import { AddNewOfferComponent } from './add-new-offer/add-new-offer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'add-new-offer', component: AddNewOfferComponent
  },
  {
    path: 'display-all-offers', component: DisplayAllOffersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
