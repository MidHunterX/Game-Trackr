import { Routes } from '@angular/router';
import { GameDetailsComponent } from './game-details/game-details.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'game-details/:id', component: GameDetailsComponent },
];
