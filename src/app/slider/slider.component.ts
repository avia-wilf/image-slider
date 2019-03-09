import {Component, HostListener, OnInit, Input} from '@angular/core';
import {SlidesService} from '../slides.service';
import {Slide} from "../Slide";

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
    @Input() slides: Slide[];

    constructor(private slidesService: SlidesService) {
    }

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
        this.slidesService.init(this.slides);
    }
}
