import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { GameItemInterface } from '../gameItem.interface';
import { GameDataService } from '../game-data.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-game-workspace',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FontAwesomeModule],
  templateUrl: './game-workspace.component.html',
  styleUrl: './game-workspace.component.scss',
})
export class GameWorkspaceComponent implements OnInit {
  faBars = faBars;

  games: GameItemInterface[] = [];
  game: GameItemInterface | undefined;

  constructor(
    // private router: Router,
    private gameDataService: GameDataService,
  ) {}

  ngOnInit(): void {
    if (this.gameDataService.isDataLoaded()) {
      this.games = this.gameDataService.getGamesData();
    } else {
      fetch('public/games.json')
        .then((response) => response.json())
        .then((data: GameItemInterface[]) => {
          this.games = data;
          this.gameDataService.setGamesData(data); // Store data in service
        })
        .catch((error) => console.error('Error loading GameData:', error));
    }

    // Subscribe to changes
    this.gameDataService.selectedGameChanged.subscribe({
      next: (game: GameItemInterface | undefined) => {
        this.game = game;
      },
      error: (err) => console.error('Error loading game:', err),
    });
  }

  viewDetails(game: GameItemInterface): void {
    this.gameDataService.setSelectedGame(game);
    console.log('log: Sending data to /game-details: ' + game);
    // this.router.navigate(['workspace/game-details']);
  }
}
