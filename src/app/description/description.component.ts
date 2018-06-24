import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { BoxComponent } from '../box/box.component';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['../../assets/font-awesome-4.7.0/css/font-awesome.min.css','./description.component.css']
})
export class DescriptionComponent extends BoxComponent implements OnInit {

  description;
  first;
  scrollElemt:HTMLElement|Element;

  constructor(private profileService:ProfileService) {
    super();
  }

  ngAfterViewInit(){
    this.first = document.querySelector('#first');
    this.scrollElemt = document.scrollingElement || document.documentElement
  }

  _scrollTo(dist,valuePerFrame){
    if(dist>0.01||dist<-0.01){
      window.requestAnimationFrame(()=>{
        this.scrollElemt.scrollLeft+=valuePerFrame;
        this._scrollTo(dist-valuePerFrame,valuePerFrame);
      });
    }
    else{
      this.scrollElemt.scrollLeft=this.first.offsetLeft;
    }
  }

  scrollTo(dist){
    this._scrollTo(dist,dist*0.05);
  }

  scrollToFirst(){
    this.scrollTo(this.first.offsetLeft);
  }

  async ngOnInit() {
    this.description = await this.profileService.getDescription();
  }

}
