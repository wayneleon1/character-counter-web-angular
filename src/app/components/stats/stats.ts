import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats',
  imports: [CommonModule],
  templateUrl: './stats.html',
  styleUrl: './stats.css',
})
export class Stats {
  @Input() charCount: number = 0;
  @Input() wordCount: number = 0;
  @Input() sentenceCount: number = 0;
}
