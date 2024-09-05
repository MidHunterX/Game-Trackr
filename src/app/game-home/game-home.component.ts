import { Component, OnInit } from '@angular/core';
import { GameCardsComponent } from './game-cards/game-cards.component';
import { RecentlyPlayedComponent } from './recently-played/recently-played.component';
import { GameItemInterface } from '../gameItem.interface';
import { GameDataService } from '../game-data.service';

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

  constructor(private gameDataService: GameDataService) {}

  ngOnInit(): void {
    if (this.gameDataService.isDataLoaded()) {
      this.games = this.gameDataService.getGamesData();
      this.splitGamesData();
    } else {
      fetch('public/games.json')
        .then((response) => response.json())
        .then((data: GameItemInterface[]) => {
          this.games = data;
          this.gameDataService.setGamesData(data); // Store data in service
          this.splitGamesData();
        })
        .catch((error) => console.error('Error loading GameData:', error));
    }
  }

  splitGamesData(): void {
    this.recentlyPlayed = this.games.slice(0, 2);
    // this.remainingGames = this.games.slice(2);
    this.remainingGames = this.games;
  }
}
