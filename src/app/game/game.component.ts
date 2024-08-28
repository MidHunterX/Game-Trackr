import { Component } from '@angular/core';
import { Gamedetails } from '../gamedetails';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  gamedetails: Gamedetails = {
    id:146,
    year:2010,
    img:"BS2",
    game:"BioShock 2",
  }
}
