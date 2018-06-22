import { Component, OnInit } from '@angular/core';
import { BoxComponent } from '../box/box.component';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css','../box/box.component.css','../../assets/font-awesome-4.7.0/css/font-awesome.min.css']
})
export class ContactSectionComponent extends BoxComponent implements OnInit {
  socialMedias;
  constructor(private profileService:ProfileService) { super();}

  async ngOnInit() {
    this.socialMedias = await this.profileService.getSocialMedias();
  }

}
