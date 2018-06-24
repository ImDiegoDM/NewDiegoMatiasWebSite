import { Component, OnInit } from '@angular/core';
import { BoxComponent } from '../box/box.component';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.css']
})
export class ProfilePictureComponent extends BoxComponent {
  profileUrl:string;
  constructor(private profileService:ProfileService){
    super();
  }

  async ngOnInit(){
    this.profileUrl = await this.profileService.getProfillePicture()
  }
}
