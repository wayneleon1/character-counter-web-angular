import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { TextInput } from './components/text-input/text-input';
import { Stats } from './components/stats/stats';
import { Density } from './components/density/density';
import { AnalyseText } from './services/analyse-text';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, TextInput, Stats, Density],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  currentText: string = '';
  readingTime: string = 'Approx. reading time: 0 minutes';
  excludeSpaces: boolean = false;

  // Stats & Density State
  charCount: number = 0;
  wordCount: number = 0;
  sentenceCount: number = 0;
  densityData: any[] = [];

  constructor(
    private renderer: Renderer2,
    private analysisService: AnalyseText,
  ) {}

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('character-counter-theme') || 'dark';
    this.applyTheme(savedTheme === 'light');
  }

  handleTextChange(text: string): void {
    this.currentText = text;
    this.updateAnalysis();
  }

  handleConfigChange(config: { excludeSpaces: boolean; charLimit: number | null }): void {
    this.excludeSpaces = config.excludeSpaces;
    this.updateAnalysis();
  }

  private updateAnalysis(): void {
    this.charCount = this.analysisService.countCharacters(this.currentText, this.excludeSpaces);
    this.wordCount = this.analysisService.countWords(this.currentText);
    this.sentenceCount = this.analysisService.countSentences(this.currentText);
    this.readingTime = this.analysisService.getReadingTime(this.wordCount);
    this.densityData = this.analysisService.getLetterDensity(this.currentText);
  }

  onThemeChange(isLight: boolean): void {
    this.applyTheme(isLight);
  }

  private applyTheme(isLight: boolean): void {
    if (isLight) {
      this.renderer.removeClass(document.body, 'dark');
    } else {
      this.renderer.addClass(document.body, 'dark');
    }
    localStorage.setItem('character-counter-theme', isLight ? 'light' : 'dark');
  }
}
