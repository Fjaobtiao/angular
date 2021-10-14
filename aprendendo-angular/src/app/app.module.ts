import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DatabindingModule } from './databinding';
import { HomeModule } from './home';
import { AngularcliComponent } from './angularcli/angularcli.component';
import { AngularcliModule } from './angularcli';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { DiretivasModule } from './diretivas';
import { ServicesModule } from './services';
import { PipesComponent } from './pipes/pipes.component';
import { PipesModule } from './pipes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AngularcliComponent,
    DiretivasComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    DatabindingModule,
    AngularcliModule,
    DiretivasModule,
    ServicesModule,
    PipesModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
