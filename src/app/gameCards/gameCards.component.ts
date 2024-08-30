import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // *ngFor
import { GameItemInterface } from '../gameItem.interface';

@Component({
  selector: 'gameCards', // HTML Tag Name
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gameCards.component.html',
  styleUrl: './gameCards.component.scss',
})
export class GameCardsComponent implements OnInit {
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
