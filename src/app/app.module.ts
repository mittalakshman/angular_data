import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RetailsectorComponent } from './retailsector/retailsector.component';
import { WholesalerComponent } from './wholesaler/wholesaler.component';

@NgModule({
  declarations: [
    AppComponent,
    RetailsectorComponent,
    WholesalerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
