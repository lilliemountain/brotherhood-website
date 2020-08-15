import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent implements OnInit {
  showGetStartedMenu = false;
  showAboutUsMenu = false;
  showProgramsMenu = false;
  navElement: Element;
  burgerButton: Element;

  constructor() {}

  ngOnInit(): void {
    this.navElement = document.querySelector('.links-container');
    this.burgerButton = document.querySelector('.burger');

    const navLinks = document.querySelectorAll(
      '.links-container ul.main-ul li'
    );
    // toggle nav
    this.burgerButton.addEventListener('click', () => {
      this.navElement.classList.toggle('nav-active');

      // animate
      navLinks.forEach((link: any, i) => {
        // if (link.style.animation) {
        //   link.style.animation = '';
        // } else {
        //   link.style.animation = `navLinkFade 0.5s ease forwards ${
        //     i / 7 + .5
        //   }s`;
        // }
        link.addEventListener('click', () => {
          if (link.className === 'main') {
            this.navElement.classList.remove('nav-active');
            this.burgerButton.classList.remove('toggle');
          } else {
          }
        });

        link.addEventListener('mouseenter', () => {
          const subLinks = document.querySelectorAll('.dd_div ul li');
          subLinks.forEach((li: any, index) => {
            li.addEventListener('click', () => {
              this.navElement.classList.remove('nav-active');
              this.burgerButton.classList.remove('toggle');
            });
          });
        });
      });

      // burger animtaion
      this.burgerButton.classList.toggle('toggle');
    });
  }

  onShowGetStartedMenu(val: boolean): void {
    this.showGetStartedMenu = val;
  }

  onShowAboutUsMenu(val: boolean): void {
    this.showAboutUsMenu = val;
  }

  onShowProgramsMenu(val: boolean): void {
    this.showProgramsMenu = val;
  }
}
