import { Component, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @ViewChild('dropdownIcon') dropdownIcon!: HTMLElement;
  @ViewChild('gamesMenu') gamesMenu!: MatMenu;
  isNavBarCollapsed = true;
  constructor() {}

  rotateDropdownIcon() {
    this.dropdownIcon.classList.toggle('rotated');
  }

  resetDropdownIcon() {
    if (this.dropdownIcon.classList.contains('rotated')) {
      this.dropdownIcon.classList.remove('rotated');
    }
  }

  newTab(url: string){
    window.open(url, "_blank");
  }
}
