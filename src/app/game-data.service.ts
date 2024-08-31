import { Injectable } from '@angular/core';
import { GameItemInterface } from './gameItem.interface';

@Injectable({
  providedIn: 'root',
})
export class GameDataService {
  constructor() {}

  private selectedGame: GameItemInterface | undefined;

  setSelectedGame(game: GameItemInterface): void {
    this.selectedGame = game;
  }

  getSelectedGame(): GameItemInterface | undefined {
    return this.selectedGame;
  }
}
