import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllKeywordsComponent } from './all-keywords/all-keywords.component';
import { KeywordDetailsComponent } from './keyword-details/keyword-details.component';
import { KeywordCardComponent } from './keyword-card/keyword-card.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AllKeywordsComponent,
    KeywordDetailsComponent,
    KeywordCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
