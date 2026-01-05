import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'humanPlaytime',
  standalone: true,
})
export class HumanPlaytimePipe implements PipeTransform {
  transform(value: number | undefined): string {
    if (value === undefined) return 'N/A';

    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value % 3600) / 60);
    var timeString = '';
    if (hours > 0) timeString += `${hours}h `;
    if (minutes > 0) timeString += `${minutes}m`;
    return timeString;
  }
}
