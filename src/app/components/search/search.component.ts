import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeoresService } from '../../services/heores.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  heroes: any[]=[];
  heroe: any;


  constructor( private _roterActived: ActivatedRoute, private _heroeServices: HeoresService) {}

  ngOnInit(): void {
    this._roterActived.params.subscribe(params=>{
      this.heroe = (params['heroe']);
      this.heroes= this._heroeServices.search(params['heroe']);
      console.log(this.heroes);
      
    })
  }
}
