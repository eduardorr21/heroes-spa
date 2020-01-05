import { Component, OnInit } from '@angular/core';

//Servicio
import {HeroesService,Heroe} from '../../servicios/heroes.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

heroes:Heroe[] = [];


  constructor(private _heroesService:HeroesService, private router:Router) { }

  ngOnInit() {

    this.heroes= this._heroesService.getHeroes();//Obteniendo los datos del array
    console.log(this.heroes)
  }

  verHeroe(idx:number){

    this.router.navigate(['/heroe',idx])
    console.log(idx) 

  }

}
