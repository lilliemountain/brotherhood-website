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
      // console.log(scroll);
      if (scroll < 550 || (scroll >= 1620 && scroll <= 2490) || (scroll >= 2895 && scroll <= 3770) || (scroll >= 4195 && scroll <= 5045)) {
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
