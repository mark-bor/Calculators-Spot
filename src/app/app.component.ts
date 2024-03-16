import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

type SectionData = {
  section: string,
  links: string[]
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  sections: SectionData[] = [
    {
      section: 'FINANTIAL',
      links: [
        'exchange-rate',
        'percent',
        'investments',
      ]
    },
    {
      section: 'MATH',
      links: [
        'quadratic-equation', 
        'pythagorean-theorem',
        'circle',
      ]
    },
  ];
  
  isMenu: boolean = false;

  upperFirstLetter(word: string): string {
    const changedWord = word.split('-').join(' ');
    return changedWord.charAt(0).toUpperCase() + changedWord.slice(1)
  }

  getPath(name: string): boolean {
    const path = window.location.pathname;
    return `/${name}`===path;
  }

  toggleMenu(): void {
    this.isMenu = !this.isMenu;
  }

  setMenu(param: boolean): void {
    this.isMenu = param;
  }
}
