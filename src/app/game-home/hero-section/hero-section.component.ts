import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // *ngFor
import { GameItemInterface } from '../../gameItem.interface';
import { Router } from '@angular/router';
import { GameDataService } from '../../game-data.service';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  // @Input() decorator allows the parent pass data through it.
  @Input() games: GameItemInterface[] = [];

  constructor(
    private router: Router,
    private gameDataService: GameDataService,
  ) {}

  viewDetails(game: GameItemInterface): void {
    this.gameDataService.setSelectedGame(game);
    console.log('log: Sending data to /game-details: ' + game);
    this.router.navigate(['workspace/game-details']);
    // this.router.navigate(['/game-details', game.id]);
  }

  onGameSelected(event: Event): void {
    const selectedGameValue = (event.target as HTMLInputElement).value;
    const selectedGame = this.games.find(
      (game) => game.name.toString() === selectedGameValue,
    );
    if (selectedGame) {
      this.viewDetails(selectedGame);
    }
  }
}
