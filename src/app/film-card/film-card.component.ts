import { Component, OnInit } from '@angular/core';
import { FilmCardService } from '../services/film-card.service';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {
  filmlist:Object[]=[];

  constructor(private filmCardService:FilmCardService) { }

  ngOnInit() {
     this.filmCardService.getFilms().subscribe(data=>{
      this.filmlist = data;
    })
  }

}
