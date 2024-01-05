import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';

declare const YT: any;

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss'],
})
export class YoutubePlayerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('player') playerElement!: ElementRef;
  playerReady = false;
  private player: any;

  ngAfterViewInit(): void {
    if (this.playerElement && this.playerElement.nativeElement) {
      this.loadYoutubePlayer();
    }
  }
  loadYoutubePlayer(): void {
    if (typeof YT !== 'undefined' && YT && YT.Player) {
      this.player = new YT.Player(this.playerElement.nativeElement, {
        height: '360',
        width: '640',
        videoId: 'OLe2mpiMvc0', // Replace 'VIDEO_ID' with the actual YouTube video ID
        events: {
          onReady: this.onPlayerReady.bind(this),
        },
      });
    }
  }

  onPlayerReady(event: any): void {
    this.playerReady = true;
  }

  ngOnDestroy(): void {
    if (this.player) {
      this.player.destroy();
    }
  }
}
