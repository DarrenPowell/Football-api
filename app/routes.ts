import { Routes, Router, RouterModule } from '@angular/router'
import { FootballComponent } from './football/football.component';
import { FootballUserComponent } from './football/football-user.component';

export const allAppRoutes = RouterModule.forRoot([
  { path: '', component: FootballComponent },

]);