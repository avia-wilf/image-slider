import {Component, HostListener, OnInit} from '@angular/core';
import {SlidesService} from '../slides.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  constructor(private slidesService: SlidesService) { }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event) {
    if (event.key === 'ArrowRight') {
      this.slidesService.next();
    }

    if (event.key === 'ArrowLeft') {
      this.slidesService.prev();
    }
  }

  ngOnInit() {
  }
}
