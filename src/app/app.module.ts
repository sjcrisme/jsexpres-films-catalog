import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import { AppComponent } from './app.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { FilmCardService } from './services/film-card.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductCartComponent,
    FilmCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpModule
  ],
  providers: [FilmCardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
