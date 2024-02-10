import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({ templateUrl: 'news.component.html' })
export class NewsComponent implements OnInit{
  loaded = false;

  ngOnInit(): void {
    timer(2000).subscribe((value)=>{this.loaded = true;})
  }


}


