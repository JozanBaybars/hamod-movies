import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-movies-pager',
  templateUrl: './movies-pager.component.html',
  styleUrls: ['./movies-pager.component.scss']
})
export class MoviesPagerComponent implements OnInit, OnChanges {

  @Input()
  limit: number = 0;

  @Input()
  moviesCount: number = 0;

  @Output() page: EventEmitter<number> = new EventEmitter<number>();

  pages_count: number = 0;
  arr: Array<number> = [];
  current_page: number = 1;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['moviesCount'].currentValue && changes['moviesCount'].currentValue > 0){
      this.pages_count = this.getPagesCount(this.limit, changes['moviesCount'].currentValue)
      this.drawPages()
    }
  }

  drawPages(){
    this.arr = [];
    if(this.limit!= 0){
      //this.pages_count = this.getPagesCount(this.limit, this.moviesCount)
      for(let i = this.current_page; i < this.current_page+10; i ++){
        this.arr.push(i);
      }
    }
  }

  ngOnInit(): void {
  }

  pageLoad(page:number){
    this.current_page = page;

    if(page < this.pages_count){
      this.drawPages();
    }
    this.page.emit(page);
  }

  getPagesCount(limit:number, movies_count:number){
    return movies_count/limit;
  }

}
