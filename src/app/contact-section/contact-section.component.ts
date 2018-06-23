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
  sended=false;
  sending=false;
  name;
  email;
  message;

  constructor(private profileService:ProfileService) { super();}

  async ngOnInit() {
    this.socialMedias = await this.profileService.getSocialMedias();
  }

  sendEmail(){
    this.sending=true;
    this.profileService.sendEmailMessage(this.name,this.email,this.message).then((response)=>{
      this.sended=true;
    },()=>{
      this.sending=false;
    })
  }

}
