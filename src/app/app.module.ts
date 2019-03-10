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
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {HttpClientModule} from "@angular/common/http";
import { ImageNumerationComponent } from './image-numeration/image-numeration.component';

@NgModule({
    declarations: [
        AppComponent,
        SliderComponent,
        ButtonsComponent,
        ArrowsComponent,
        ImageComponent,
        ImageNumerationComponent
    ],
    imports: [
        BrowserModule,
        AngularFontAwesomeModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false})
    ],
    providers: [SlidesService, InMemoryDataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
