import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss',
})
export class ContentCardComponent {
  @Input() cardTitle: string = 'Default Title'; // Input property for card title
  @Input() cardSubtitle: string = 'Default Subtitle'; // Input property for card subtitle
  @Input() cardContent: string = 'Default Content'; // Input property for card content
  @Input() image: string = 'default img';
  @Input() isRight: boolean = false;
}
