import {Injectable} from '@angular/core';
import {Slide} from './Slide';
import * as _ from 'lodash';

@Injectable({providedIn: 'root'})

export class SlidesService {
    private baseSlides: Slide[] = [];
    private curSlides: Slide[] = [];
    private curSlideIdx = 0;

    init(baseSlides: Slide[]): void {
        this.baseSlides = baseSlides;
        this.curSlides = _.clone(baseSlides);
        this.curSlideIdx = 0;
    }

    reset(): void {
        this.init(_.clone(this.baseSlides));
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
