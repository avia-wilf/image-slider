import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {InMemoryDataService} from './in-memory-date.service';
import {SlidesService} from './slides.service';
import {SliderComponent} from './slider/slider.component';
import {ButtonsComponent} from './buttons/buttons.component';
import {ArrowsComponent} from './arrows/arrows.component';
import { ImageComponent } from './image/image.component';

@NgModule({
    declarations: [
        AppComponent,
        SliderComponent,
        ButtonsComponent,
        ArrowsComponent,
        ImageComponent
    ],
    imports: [
        BrowserModule,
        AngularFontAwesomeModule,
        BrowserAnimationsModule
    ],
    providers: [SlidesService, InMemoryDataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
