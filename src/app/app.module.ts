import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { CardsContainerComponent } from './cards-container/cards-container.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardsContainerComponent,
    MessagesComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
