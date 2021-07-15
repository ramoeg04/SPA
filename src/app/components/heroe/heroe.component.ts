import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeoresService } from 'src/app/services/heores.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor(_roterActived: ActivatedRoute, private _heroesService: HeoresService) {
    _roterActived.params.subscribe( params =>{
      this.heroe = _heroesService.getHeroe(params['id']);
      console.log(this.heroe)
    })
   }

  ngOnInit(): void {
  }

}
