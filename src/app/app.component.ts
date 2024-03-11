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
      section: 'Financial',
      links: [
        'exchange-rate',
        'percent',
        'investments',
      ]
    },
    {
      section: 'Math',
      links: [
        'quadratic-equation', 
        'pythagorean-theorem',
        'circle',
      ]
    },
  ];
  
  isMenu: boolean = false;

  upperFirstLetter(word: string) {
    const changedWord = word.split('-').join(' ');
    return changedWord.charAt(0).toUpperCase() + changedWord.slice(1)
  }

  toggleMenu() {
    this.isMenu = !this.isMenu;
  }

  setMenu(param: boolean) {
    this.isMenu = param;
  }
}
