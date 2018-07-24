import { Component, OnInit } from '@angular/core';
import { BoxComponent } from '../box/box.component';
import { ProfileService } from '../profile.service';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.css','../box/box.component.css','../../assets/font-awesome-4.7.0/css/font-awesome.min.css']
})
export class ProjectSectionComponent extends BoxComponent implements OnInit {
  projectsGrouped=[];
  groupWidth='30rem';
  width;
  groupsFolow=[2,1,4,1,3,1];
  aspect=1.777777;
  projectSelected;
  inline;

  constructor(private profileService:ProfileService) {super(); }

  random(length):number{
    return Math.floor(Math.random() * (length))+1;
  }

  group1(item){
    return {
      class:'smallG',
      width:18,
      items:[
        {item:item,class:'full'}
      ]
    }
  }

  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  group2(item){
    this.shuffleArray(item);
    return {
      class:'mediumG',
      width:25,
      items:[
        {item:item[0],class:'halfH'},
        {item:item[1],class:'halfH'}
      ]
    }
  }

  group3(item){
    this.shuffleArray(item);
    let r = Math.floor(Math.random()*2);
    if(r==0){
      return {
        class:'mediumG',
        width:25,
        items:[
          {item:item[0],class:'halfH'},
          {item:item[1],class:'halfHW'},
          {item:item[2],class:'halfHW'}
        ]
      }
    }else{
      return {
        class:'mediumG',
        width:25,
        items:[
          {item:item[0],class:'halfHW'},
          {item:item[1],class:'halfHW'},
          {item:item[2],class:'halfH'}
        ]
      }
    }
  }

  group4(item){
    this.shuffleArray(item);
    return {
      class:'largeG',
      width:35,
      items:[
        {item:item[0],class:'halfHlargeW'},
        {item:item[1],class:'halfHsmallW'},
        {item:item[2],class:'halfHsmallW'},
        {item:item[3],class:'halfHlargeW'}
      ]
    }
  }

  selectProject(item){
    if(!AppComponent.moving){
      this.projectSelected=item;
      // this.projectSelected.flex = '0';
      this.inline = 'none';
      setTimeout(()=>{
        this.inline= 'inline';
      },10);
    }
  }

  exitProject(){
    this.projectSelected.selectedImg = this.projectSelected.img_1;
    this.projectSelected = undefined;
  }

  selectImg(img){
    this.projectSelected.selectedImg=img;
  }

  async ngOnInit() {
    let projects = await this.profileService.getProjects();
    console.log(projects);
    let groupIndex=0;
    while(projects.length>0){
      let group = this.groupsFolow[groupIndex];
      groupIndex++;
      if(groupIndex>=this.groupsFolow.length){
        groupIndex=0;
      }
      console.log(group)
      group=Math.min(projects.length,group);
      if(group==4){
        let item1 = projects.pop();
        let item2 = projects.pop();
        let item3 = projects.pop();
        let item4 = projects.pop();
        this.projectsGrouped.push(this.group4([item1,item2,item3,item4]))
      }else if(group==3){
        let item1 = projects.pop();
        let item2 = projects.pop();
        let item3 = projects.pop();
        this.projectsGrouped.push(this.group3([item1,item2,item3]))
      }else if(group==2){
        let item1 = projects.pop();
        let item2 = projects.pop();
        this.projectsGrouped.push(this.group2([item1,item2]))
      }else {
        let item1 = projects.pop();
        this.projectsGrouped.push(this.group1(item1))
      }
    }
    console.log(this.projectsGrouped);
    this.width=0;
    this.projectsGrouped.forEach(item=>{
      this.width+=item.width;
    })
  }

}
