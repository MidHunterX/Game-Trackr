import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // *ngFor
import { GameItemInterface } from '../gameItem.interface';

@Component({
  selector: 'app-game-cards', // HTML Tag Name
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-cards.component.html',
  styleUrl: './game-cards.component.scss',
})
export class GameCardsComponent {
  // @Input() decorator allows the parent pass data through it.
  @Input() remainingGames: GameItemInterface[] = [];
}
