import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/core/interfaces/heroe';
import { HeoresService } from '../../services/heores.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  public heroes: Heroe[]=[];
  constructor(private _heroesService: HeoresService, private _router: Router) { }

  ngOnInit(): void {
  this.heroes = this._heroesService.getHeroes();
  }

  
  

}
