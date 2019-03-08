import {Component, OnInit} from '@angular/core';
import {SlidesService} from '../slides.service';

@Component({
    selector: 'app-arrows',
    templateUrl: './arrows.component.html',
    styleUrls: ['./arrows.component.css']
})
export class ArrowsComponent implements OnInit {

    constructor(private slidesService: SlidesService) {
    }

    ngOnInit() {
    }
}
