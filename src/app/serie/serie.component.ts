import { Component, OnInit } from '@angular/core';
import{ Serie } from './serie';
import{ SerieService } from './serie.service';


@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  constructor(private serieService: SerieService) { }

  series: Array<Serie>;

  getSeries(){
    this.serieService.getSeries().subscribe((s) =>{
      this.series = s;
    });
  }

  getAverageSeasons(){
    const totalSeasons = this.series.reduce((i, s) => i + s.seasons, 0);
    return totalSeasons / this.series.length;
  }

  ngOnInit() {
    this.getSeries();
  }

}
