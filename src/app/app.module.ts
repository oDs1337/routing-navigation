import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ContentContainerComponent } from './content-container/content-container.component';
import { AddNewOfferComponent } from './add-new-offer/add-new-offer.component';
import { DisplayAllOffersComponent } from './display-all-offers/display-all-offers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentContainerComponent,
    AddNewOfferComponent,
    DisplayAllOffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
