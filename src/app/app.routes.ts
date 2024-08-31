import { Routes } from '@angular/router';
import { GameHomeComponent } from './game-home/game-home.component';
import { GameDetailsComponent } from './game-details/game-details.component';

export const routes: Routes = [
  { path: '', component: GameHomeComponent },
  { path: 'game-details/:id', component: GameDetailsComponent },
];
