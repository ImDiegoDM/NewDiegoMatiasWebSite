import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SideScrollerComponent } from './side-scroller/side-scroller.component';
import { BoxComponent } from './box/box.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { DescriptionComponent } from './description/description.component';

import { ProfileService } from './profile.service';
import { KnowledgeComponent } from './knowledge/knowledge.component';


@NgModule({
  declarations: [
    AppComponent,
    SideScrollerComponent,
    BoxComponent,
    ProfilePictureComponent,
    DescriptionComponent,
    KnowledgeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
