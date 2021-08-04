import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessengerComponent } from './containers/messenger/messenger.component';
import { MessagingSessionComponent } from './components/messaging-session/messaging-session.component';
import { MessagesService } from './services/messages.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesPagerComponent } from './components/movies-pager/movies-pager.component';



@NgModule({
  declarations: [
    MessengerComponent,
    MessagingSessionComponent,
    MovieComponent,
    MoviesPagerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule // for providing HttpClient
  ],
  exports: [
    MessengerComponent,
    MessagingSessionComponent,
    MovieComponent
  ],
  providers:[
    MessagesService
  ]
})
export class MessengerModule { }
