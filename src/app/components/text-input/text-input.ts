import { Component, EventEmitter, Output, Input } from '@angular/core'; // Add Input here
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './text-input.html',
  styleUrl: './text-input.css',
})
export class TextInput {
  @Input() readingTime: string = 'Approx. reading time: 0 minutes';

  @Output() textChanged = new EventEmitter<string>();
  @Output() configChanged = new EventEmitter<{
    excludeSpaces: boolean;
    charLimit: number | null;
  }>();

  text: string = '';
  excludeSpaces: boolean = false;
  setLimit: boolean = false;
  charLimit: number | null = null;

  onInputChange() {
    this.textChanged.emit(this.text);
  }

  emitConfig() {
    this.configChanged.emit({
      excludeSpaces: this.excludeSpaces,
      charLimit: this.setLimit ? this.charLimit : null,
    });
  }
}
