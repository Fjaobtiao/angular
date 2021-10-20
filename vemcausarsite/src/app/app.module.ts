import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HomeModule } from './home';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContatoComponent } from './pages/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
