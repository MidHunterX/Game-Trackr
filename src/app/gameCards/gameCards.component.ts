import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // *ngFor
import { GameItemInterface } from '../gameItem.interface';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gameCards.component.html',
  styleUrl: './gameCards.component.scss',
})
export class GameCardsComponent implements OnInit {
  games: GameItemInterface[] = [];
  ngOnInit(): void {
    fetch('public/data.json')
      .then((response) => response.json())
      .then((data: GameItemInterface[]) => {
        this.games = data;
      })
      .catch((error) => console.error('Error loading GameData:', error));
  }
}
