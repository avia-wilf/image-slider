import {Injectable} from '@angular/core';
import {Slide} from './Slide';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import * as _ from 'lodash';
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})

export class SlidesService {
    private slidesUrl = "api/slides";
    private baseSlides: Slide[] = [];
    private curSlides: Slide[] = [];
    private curSlideIdx: number = 0;

    constructor(private http: HttpClient) {
    }

    init(): Observable<Slide[]> {
        return this.http.get<Slide[]>(this.slidesUrl)
            .pipe(
                map(slides => {
                    this.baseSlides = slides;
                    this.curSlides = _.clone(this.baseSlides);
                    this.curSlideIdx = 0;
                    return slides;
                }));
    }

    genSlideId(): number {
        return !this.isEmpty() ? Math.max(...this.curSlides.map(slide => slide.id)) + 1 : 1;
    }

    delete(): void {
        const wasLastSlide = this.isLastSlide();
        _.pullAt(this.curSlides, [this.curSlideIdx]);
        if (wasLastSlide) {
            --this.curSlideIdx;
        }
    }

    duplicate(): void {
        this.curSlides.splice(this.curSlideIdx, 0, {
            url: this.curSlides[this.curSlideIdx].url,
            id: this.genSlideId()
        });
    }

    isEmpty(): boolean {
        return this.curSlides.length === 0;
    }

    next(): Slide {
        this.curSlideIdx = (this.curSlideIdx + 1) % this.getSlidesAmount();
        return this.curSlides[this.curSlideIdx];
    }

    prev(): Slide {
        if (this.isFirstSlide()) {
            this.curSlideIdx = this.getSlidesAmount() - 1;
        } else {
            --this.curSlideIdx;
        }

        return this.curSlides[this.curSlideIdx];
    }

    getCurSlide(): Slide {
        if (this.isEmpty()) return;

        return this.curSlides[this.curSlideIdx];
    }

    getCurIdx(): number {
        return this.curSlideIdx;
    }

    isFirstSlide(): boolean {
        return this.curSlideIdx === 0;
    }

    isLastSlide(): boolean {
        return this.curSlideIdx === this.getSlidesAmount() - 1;
    }

    getSlidesAmount(): number {
        return _.size(this.curSlides);
    }
}
