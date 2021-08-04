import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss']
})
export class MessengerComponent implements OnInit {

  movies: Array<any> = [];
  limit: number = 40;
  moviesCount: number = 0;

  constructor(private messagesService: MessagesService) { }



  ngOnInit(): void {
    this.loadData();
  }

  loadData(page:number = 1){
    this.messagesService.getMovies(this.limit, page).subscribe(res => {
      this.movies = res.data.movies;
      this.moviesCount = res.data.movie_count;
    })
  }

}
