import { Component,HostListener,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @ViewChild("child", {read: ElementRef}) child:ElementRef;
  scrollElemt;
  mousePos:{clientX,clientY};
  buffer=0;
  directionMoving=0;
  public static moving:boolean=false;

  ngAfterViewInit(){
    this.scrollElemt = document.scrollingElement || document.documentElement
  }

  @HostListener('mousedown',['$event'])
  onClick(event:MouseEvent){
    event.preventDefault();
    event.stopPropagation();
    // console.log(event)
    // console.log(this.scrollElemt.scrollLeft);
    this.mousePos={clientX:event.clientX,clientY:event.clientY};
  }

  @HostListener('mousemove',['$event'])
  onDrag(event:MouseEvent){
    if(this.mousePos){
      event.preventDefault();
      event.stopPropagation();
      AppComponent.moving = true;
      setTimeout(()=>{
        if(this.mousePos){
          let deltaX = this.mousePos.clientX - event.clientX;
          this.mousePos = {clientX:event.clientX,clientY:event.clientY};
          this.scrollElemt.scrollLeft+=deltaX;
        }
      },100);
    }
  }
  @HostListener('wheel',['$event'])
  onWheel(event:WheelEvent){
    this.scrollElemt.scrollLeft+=event.deltaY;
  }

  animateSlide(value,percentage?){
    if(value>0.1||value<-0.1){
      if(!percentage){
        percentage=0.01;
      }
      setTimeout(()=>{
        let calc = value*percentage;
        value-=calc;
        this.scrollElemt.scrollLeft+=value;
        this.animateSlide(value,percentage+0.01);
      },10);
    }
  }

  @HostListener('mouseup',['$event'])
  onRelease(event:MouseEvent){
    setTimeout(()=>{
      AppComponent.moving = false;
    },100);
    let deltaX = this.mousePos.clientX - event.clientX;
    this.animateSlide(deltaX/4);
    event.preventDefault();
    event.stopPropagation();
    this.mousePos=undefined;
  }
}
