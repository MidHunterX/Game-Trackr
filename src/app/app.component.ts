import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameCardsComponent } from './gameCards/gameCards.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GameCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Played-Games-List';
}
