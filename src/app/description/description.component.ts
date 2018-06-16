import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { BoxComponent } from '../box/box.component';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent extends BoxComponent implements OnInit {

  description;

  constructor(private profileService:ProfileService) {
    super();
  }

  async ngOnInit() {
    this.description = await this.profileService.getDescription();
  }

}
