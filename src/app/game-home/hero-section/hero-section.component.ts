import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
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
export class HeroSectionComponent implements OnChanges {
  // @Input() decorator allows the parent pass data through it.
  @Input() games: GameItemInterface[] = [];
  @Input() mostRecent: GameItemInterface | undefined;

  starRating: number | undefined;

  calculateStarRating(ratings: number): number {
    return Math.floor((ratings / 100) * 5);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['mostRecent'] && this.mostRecent?.rating) {
      this.starRating = this.calculateStarRating(this.mostRecent.rating);
      console.log('Star Rating Updated:', this.starRating);
    } else {
      console.log('No rating available');
    }
  }

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

  // FOR SEARCH BAR RESULT
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
