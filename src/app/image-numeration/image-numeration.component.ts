import {Component, OnInit} from '@angular/core';
import {SlidesService} from "../slides.service";

@Component({
    selector: 'app-image-numeration',
    templateUrl: './image-numeration.component.html',
    styleUrls: ['./image-numeration.component.css']
})
export class ImageNumerationComponent implements OnInit {

    constructor(private slideService: SlidesService) {
    }

    getCurIdx(): number {
        return this.slideService.getCurIdx();
    }

    getSlidesAmount(): number {
        return this.slideService.getSlidesAmount();
    }

    ngOnInit() {
    }

}
