import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService{
    createDb() {
        const slides = [
            {url: '../assets/images/100A0242.jpg', id: 1},
            {url: '../assets/images/IMG_1207.jpg', id: 2},
            {url: '../assets/images/IMG_9498.jpg', id: 3}
        ];
        return {slides};
    }
}
