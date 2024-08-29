import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // *ngFor
import { GameInterface } from './game.interface';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent implements OnInit {
  games: GameInterface[] = [];
  ngOnInit(): void {
    fetch('public/data.json')
      .then((response) => response.json())
      .then((data: GameInterface[]) => {
        this.games = data;
      })
      .catch((error) => console.error('Error loading GameData:', error));
  }
}
