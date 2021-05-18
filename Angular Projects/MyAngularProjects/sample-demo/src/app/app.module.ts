import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer.component';
import {HeaderComponent} from './header.component';

@NgModule({
  declarations: [
    AppComponent,HeaderComponent,FooterComponent        // all component details. 
  ],
  imports: [
    BrowserModule       // This module help to render the data on browser
    /*  OrderModule,CustomerModule      */
  ],
  providers: [],
  bootstrap: [AppComponent]   // first component in web page. 
})
export class AppModule { }
