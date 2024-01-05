import { Component } from '@angular/core';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
  aboutUsContent = `We are an indie game development studio located in Pittsburgh, Pennsylvania, USA.
  Founded in the summer of 2022, our only goal is to create fun experiences for players to enjoy with us. We hope to build a community of gamers that enjoy the experience of games, not just the FOMO and micro-transactions that come with some of them.
  We develop games on PC platforms with the potential for VR titles as well.
  For those of you who are curious, our name originates from the founders' childhood nicknames: \"Short Fry\" and \"Sid the Squid\".`;
  ourTypeOfGame = `We love to build games that are challenging, balanced, and don't take themselves too seriously, but more importantly fun for just about anyone!
  <p>August 2023 saw our first release, <a href="https://store.steampowered.com/app/2124300/Shopping_Spree_Extreme/">'Shopping Spree: Extreme!!!'</a> available now on Steam!</p>`;
}
