import {Component, OnInit} from '@angular/core';
import {SlidesService} from '../slides.service';
import {Slide} from "../Slide";

@Component({
    selector: 'app-arrows',
    templateUrl: './arrows.component.html',
    styleUrls: ['./arrows.component.css']
})
export class ArrowsComponent implements OnInit {

    constructor(private slidesService: SlidesService) {
    }

    prev(): Slide {
        return this.slidesService.prev();
    }

    next(): Slide {
        return this.slidesService.next();
    }

    ngOnInit() {
    }
}
