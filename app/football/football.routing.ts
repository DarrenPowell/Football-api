import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FootballComponent } from './football.component';
import { FootballUserComponent } from './football-user.component';



export const FootballRouting = RouterModule.forChild([
    {path: 'football', component: FootballComponent,},
    {path: 'user/:country_name/:team_name', component: FootballUserComponent },

]);