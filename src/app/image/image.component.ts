import {Component, OnInit} from '@angular/core';
import {SlidesService} from "../slides.service";

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

    constructor(private slidesService: SlidesService) {
    }

    ngOnInit() {
    }
}
