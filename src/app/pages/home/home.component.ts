import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  welcomeIndicator = false;
  levelIndicator = false;
  dedicationIndicator = false;

  welcomeDotIndicator = false;
  levelDotIndicator = false;
  dedicationDotIndicator = false;

  darkIndicator = true;

  constructor() {}

  ngOnInit(): void {
    window.addEventListener('scroll', (element) => {
      const scroll = window.scrollY;

      if (scroll <= 1785) {
        this.welcomeDotIndicator = true;
      } else {
        this.welcomeDotIndicator = false;
      }

      if (scroll > 1785 && scroll <= 3105) {
        this.levelDotIndicator = true;
      } else {
        this.levelDotIndicator = false;
      }

      if (scroll > 3105 && scroll <= 4445) {
        this.dedicationDotIndicator = true;
      } else {
        this.dedicationDotIndicator = false;
      }

      const circleDivs = document.querySelectorAll('.indicator-circle');
      const textDivs = document.querySelectorAll('.indicator-text');
      console.log(scroll);
      if (scroll < 700 || (scroll >= 1830 && scroll <= 2685) || (scroll >= 3125 && scroll <= 4005) || (scroll >= 4445 && scroll <= 5310)) {
        circleDivs.forEach(el => {
          el.classList.add('indicator-circle-dark');
        });
        textDivs.forEach(el => {
          el.classList.add('text-dark');
        });
      } else {
        circleDivs.forEach(el => {
          el.classList.remove('indicator-circle-dark');
        });
        textDivs.forEach(el => {
          el.classList.remove('text-dark');
        });
      }
    });
  }

  onHoverIndicator(indicatorName): void {
    console.log(indicatorName === 'welcome');
    this.welcomeIndicator = indicatorName === 'welcome';
    this.levelIndicator = indicatorName === 'level';
    this.dedicationIndicator = indicatorName === 'dedication';
  }

  scrollToElement(destination): void {
    const element = document.querySelector(destination);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
