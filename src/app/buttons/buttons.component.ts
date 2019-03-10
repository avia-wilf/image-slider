import {Component, OnInit} from '@angular/core';
import {SlidesService} from '../slides.service';

@Component({
    selector: 'app-buttons',
    templateUrl: './buttons.component.html',
    styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

    constructor(private slidesService: SlidesService) {
    }

    canPerformChange(): boolean {
        return !this.slidesService.isEmpty();
    }

    delete(): void {
        this.slidesService.delete();
    }

    duplicate(): void {
        this.slidesService.duplicate();
    }

    reset(): void {
        this.slidesService.init()
            .subscribe(slides => slides);
    }

    ngOnInit() {
    }

}
