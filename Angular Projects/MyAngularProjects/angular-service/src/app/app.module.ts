import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { MyService } from './myservice.service';
import { SecondComponent } from './second/second.component';
import { FakeComponent } from './fake/fake.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,   // all component 
    FirstComponent,
    SecondComponent,
    FakeComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [MyService],      // service class details. 
  bootstrap: [AppComponent]
})
export class AppModule { }
