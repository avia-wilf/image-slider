import {Component, OnInit} from '@angular/core';
import {InMemoryDataService} from "./in-memory-date.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    slides = InMemoryDataService.getSlides();

    constructor() {
    }

    ngOnInit(): void {
    }
}
