import { Router } from '@angular/router';
import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common'; // *ngFor
import { GameItemInterface } from '../../gameItem.interface';
import { GameDataService } from '../../game-data.service';
import { NgOptimizedImage } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game-cards', // HTML Tag Name
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './game-cards.component.html',
  styleUrl: './game-cards.component.scss',
})
export class GameCardsComponent {
  // @Input() decorator allows the parent pass data through it.
  @Input() remainingGames: GameItemInterface[] = [];

  // Censorship
  filteredGames: GameItemInterface[] = [];
  isCensored: boolean = true;
  private sub = new Subscription();

  // Router to pass down single Game Details down a route
  constructor(
    private router: Router,
    private gameDataService: GameDataService,
  ) {}

  // CENSORSHIP FILTER
  ngOnInit() {
    this.sub = this.gameDataService.isCensored$.subscribe(val => {
      this.isCensored = val;
      this.applyFilter();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['remainingGames']) {
      this.applyFilter();
    }
  }

  applyFilter() {
    if (this.isCensored) {
      this.filteredGames = this.remainingGames.filter(game => !this.gameDataService.isNSFW(game));
    } else {
      this.filteredGames = [...this.remainingGames];
    }
  }

  toggleCensorship() {
    this.gameDataService.toggleCensorship();
  }

  viewDetails(game: GameItemInterface): void {
    this.gameDataService.setSelectedGame(game);
    console.log('log: Sending data to /game-details: ' + game);
    this.router.navigate(['workspace/game-details']);
    // this.router.navigate(['/game-details', game.id]);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
