import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  constructor(_roterActived: ActivatedRoute) {
    _roterActived.params.subscribe( params =>{
      console.log(params['id'])
    })
   }

  ngOnInit(): void {
  }

}
