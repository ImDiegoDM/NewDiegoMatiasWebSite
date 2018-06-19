import { Component, OnInit,Input } from '@angular/core';
import { BoxComponent } from '../box/box.component';

@Component({
  selector: 'app-text-section',
  templateUrl: './text-section.component.html',
  styleUrls: ['./text-section.component.css','../box/box.component.css']
})
export class TextSectionComponent extends BoxComponent implements OnInit {

  @Input() title;
  @Input() text;
  @Input() bgColor;

  constructor() { super(); }

  ngOnInit() {

  }

}
