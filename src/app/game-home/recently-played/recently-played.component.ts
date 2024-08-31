import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameItemInterface } from '../../gameItem.interface';

@Component({
  selector: 'app-recently-played',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recently-played.component.html',
  styleUrl: './recently-played.component.scss',
})
export class RecentlyPlayedComponent {
  // @Input() decorator allows the parent pass data through it.
  @Input() recentlyPlayed: GameItemInterface[] = [];
}
