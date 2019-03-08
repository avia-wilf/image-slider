import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

import {AppComponent} from './app.component';
import {InMemoryDataService} from './in-memory-date.service';
import {SlidesService} from './slides.service';
import {SliderComponent} from './slider/slider.component';
import {ButtonsComponent} from './buttons/buttons.component';
import {ArrowsComponent} from './arrows/arrows.component';

@NgModule({
    declarations: [
        AppComponent,
        SliderComponent,
        ButtonsComponent,
        ArrowsComponent
    ],
    imports: [
        BrowserModule,
        AngularFontAwesomeModule
    ],
    providers: [SlidesService, InMemoryDataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
