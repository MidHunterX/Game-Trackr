import { Component, OnInit } from '@angular/core';
import { GameCardsComponent } from './game-cards/game-cards.component';
import { RecentlyPlayedComponent } from './recently-played/recently-played.component';
import { GameItemInterface } from '../gameItem.interface';

@Component({
  selector: 'app-game-home',
  standalone: true,
  imports: [GameCardsComponent, RecentlyPlayedComponent],
  templateUrl: './game-home.component.html',
  styleUrl: './game-home.component.scss',
})
export class GameHomeComponent implements OnInit {
  games: GameItemInterface[] = [];
  recentlyPlayed: GameItemInterface[] = [];
  remainingGames: GameItemInterface[] = [];

  ngOnInit(): void {
    fetch('public/games.json')
      .then((response) => response.json())
      .then((data: GameItemInterface[]) => {
        this.games = data;
        this.recentlyPlayed = this.games.slice(0, 2);
        // this.remainingGames = this.games.slice(2);
        this.remainingGames = this.games;
      })
      .catch((error) => console.error('Error loading GameData:', error));
  }
}
