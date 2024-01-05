import { Component } from '@angular/core';

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.scss'],
})
export class ImageGridComponent {
  images: string[] = [
    'assets/images/Level1Cover.PNG',
    'assets/images/Level2Cover.png',
    'assets/images/Level3Cover.png',
    'assets/images/Level4Cover.png',
    'assets/images/Level5Cover.png',
    'assets/images/Level6Cover.png',
    // Add more image URLs as needed...
  ];

  isLightboxOpen: boolean = false;
  selectedImage: string = '';

  openLightbox(image: string) {
    this.selectedImage = image;
    this.isLightboxOpen = true;
  }
  // Method to close the lightbox
  closeLightbox() {
    this.isLightboxOpen = false;
    this.selectedImage = ''; // Reset selected image
  }
}
