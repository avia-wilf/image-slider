import {Component, OnInit} from '@angular/core';
import {SlidesService} from "./slides.service";
import {InMemoryDataService} from "./in-memory-date.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private slidesService: SlidesService) {
    }

    ngOnInit(): void {
        const slides = InMemoryDataService.getSlides();
        this.slidesService.init(slides);
    }
}
