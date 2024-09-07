import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { GameItemInterface } from '../gameItem.interface';
import { GameDataService } from '../game-data.service';

@Component({
  selector: 'app-game-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-details.component.html',
  styleUrl: './game-details.component.scss',
})
export class GameDetailsComponent implements OnInit {
  game: GameItemInterface | undefined;

  constructor(
    private router: Router,
    private gameDataService: GameDataService,
  ) {}

  ngOnInit(): void {
    this.game = this.gameDataService.getSelectedGame();
    console.log('log: Recieved on /game-details: ' + this.game);

    // DUMMY DEVELOPMENT DATA
    if (this.gameDataService.isDevelopment()) {
      this.game = {
        id: 134,
        name: 'The Coffin of Andy and Leyley',
        year: 2023,
        developer: 'Nemlei',
        description:
          'In The Coffin of Andy and Leyley, you follow the story of Andrew and Ashley, siblings who have been quarantined in their house for months and are slowly starving to death. Everyone in the building appears to have contracted a contagious disease and are now locked in their apartments by armed guards. The guards do keep promising to bring food, but none ever comes, so eventually they have to resort to drastic measures.',
        website:
          'https://store.steampowered.com/app/2378900/The_Coffin_of_Andy_and_Leyley/',
        game_engines: ['Rpgmaker'],
        player_modes: ['Single player'],
        platforms: ['PC (Microsoft Windows)'],
        pov: ['Bird view / Isometric', 'Text'],
        genres: ['Role-playing (RPG)', 'Adventure', 'Visual Novel'],
        themes: ['Horror'],
        keywords: ['female protagonist', 'cannibalism', 'forbidden love'],
        img: 'tcoaal',
        rating: 81,
      };
    }

    if (!this.game) {
      this.router.navigate(['/']);
    }
  }
}
