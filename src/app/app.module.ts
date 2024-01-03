import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Main1Component } from './componentsapp/main1/main1.component';
import { Main2Component } from './componentsapp/main2/main2.component';
import { Main12Component } from './componentsapp/main12/main12.component';
import { Main22Component } from './componentsapp/main22/main22.component';

@NgModule({
  declarations: [
    AppComponent,
    Main1Component,
    Main2Component,
    Main12Component,
    Main22Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
