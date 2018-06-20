import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-side-scroller',
  templateUrl: './side-scroller.component.html',
  styleUrls: ['./side-scroller.component.css']
})
export class SideScrollerComponent implements OnInit {

  texts;
  contact;

  constructor(private profileService:ProfileService) { }

  async ngOnInit() {
    this.texts =  await this.profileService.getTexts();
    this.contact = await this.profileService.getContact();
  }

}
