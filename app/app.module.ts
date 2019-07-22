import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FootballComponent } from './football/football.component';
import { allAppRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms' ;
import { HttpClientModule } from '@angular/common/http';
import { APIFOOTBALLService } from './api-football.service';
import { FootballRouting } from './football/football.routing';
import { FootballUserComponent } from './football/football-user.component';



@NgModule({
  declarations: [
    AppComponent,
    FootballComponent,
    FootballUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    allAppRoutes,
    ReactiveFormsModule,
    HttpClientModule,
    FootballRouting,
    
  ],
  providers: [APIFOOTBALLService],
  bootstrap: [AppComponent]
})
export class AppModule { }
