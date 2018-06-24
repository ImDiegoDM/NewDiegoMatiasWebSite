import { Component, OnInit } from '@angular/core';
import { BoxComponent } from '../box/box.component';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css','../box/box.component.css']
})
export class KnowledgeComponent extends BoxComponent implements OnInit {
  knowledges;
  listClass;
  constructor(private profileService:ProfileService) { super();}

  async ngOnInit() {
    this.knowledges = await this.profileService.getKnowledges();
    if(this.knowledges.length % 4==0){
      this.listClass='four conected';
    }else if(this.knowledges.length % 3==0){
      this.listClass='three conected';
    }else{
      this.listClass='four';
    }
  }

}
