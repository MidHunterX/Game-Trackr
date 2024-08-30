import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // *ngFor
import { RouterOutlet } from '@angular/router';
import { GameItemInterface } from './gameItem.interface';
import { GameCardsComponent } from './game-cards/game-cards.component';
import { RecentlyPlayedComponent } from './recently-played/recently-played.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    GameCardsComponent,
    RecentlyPlayedComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Played-Games-List';
  games: GameItemInterface[] = [];
  recentlyPlayed: GameItemInterface[] = [];
  remainingGames: GameItemInterface[] = [];

  ngOnInit(): void {
    fetch('public/data.json')
      .then((response) => response.json())
      .then((data: GameItemInterface[]) => {
        this.games = data;
        this.recentlyPlayed = this.games.slice(0, 2);
        this.remainingGames = this.games.slice(2);
      })
      .catch((error) => console.error('Error loading GameData:', error));
  }
}
