import {Injectable} from '@angular/core';
import {Slide} from './Slide';

@Injectable({
    providedIn: "root",
})
export class InMemoryDataService {
    static getSlides(): Slide[] {
        return [
            {url: '../assets/images/100A0242.jpg'},
            {url: '../assets/images/IMG_1207.jpg'},
            {url: '../assets/images/IMG_9498.jpg'}
        ];
    }
}
