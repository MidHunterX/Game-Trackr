import { Injectable } from '@angular/core';
import { GameItemInterface } from './gameItem.interface';

@Injectable({
  providedIn: 'root',
})
export class GameDataService {
  constructor() {}

  // FOR HOME ROUTE
  private gamesData: GameItemInterface[] = [];

  setGamesData(data: GameItemInterface[]): void {
    this.gamesData = data;
  }

  getGamesData(): GameItemInterface[] {
    return this.gamesData;
  }

  isDataLoaded(): boolean {
    return this.gamesData.length > 0;
  }

  // FOR GAME DETAILS ROUTE
  private selectedGame: GameItemInterface | undefined;

  setSelectedGame(game: GameItemInterface): void {
    this.selectedGame = game;
  }

  getSelectedGame(): GameItemInterface | undefined {
    return this.selectedGame;
  }
}
