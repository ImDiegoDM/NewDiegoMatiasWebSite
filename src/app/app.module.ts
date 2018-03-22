import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SideScrollerComponent } from './side-scroller/side-scroller.component';
import { BoxComponent } from './box/box.component';


@NgModule({
  declarations: [
    AppComponent,
    SideScrollerComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
