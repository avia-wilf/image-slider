import { Component, OnInit } from '@angular/core';
import {SlidesService} from '../slides.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor(private slidesService: SlidesService) { }

  ngOnInit() {
  }

}
