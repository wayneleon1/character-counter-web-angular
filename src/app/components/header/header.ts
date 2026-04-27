import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  @Output() themeChanged = new EventEmitter<boolean>();

  isLightMode = false;

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('character-counter-theme');
    this.isLightMode = savedTheme === 'light';
  }

  onToggleChange(): void {
    this.themeChanged.emit(this.isLightMode);
  }
}
