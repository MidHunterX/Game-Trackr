import { Component } from '@angular/core';
import { GameInterface } from '../game.interface';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  gamedetails: GameInterface = {
    id: 146,
    year: 2010,
    img: 'BS2',
    game: 'BioShock 2',
  };
}
