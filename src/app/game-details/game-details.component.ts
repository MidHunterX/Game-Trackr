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
    console.log("log: Recieved on /game-details: " + this.game)
    if (!this.game) {
      this.router.navigate(['/']);
    }
  }
}
