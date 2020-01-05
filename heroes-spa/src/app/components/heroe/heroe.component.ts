import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {HeroesService} from '../../servicios/heroes.service'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent {

  //Variable local
  heroe:any ={

  }

  constructor(private activatedRoute:ActivatedRoute, private heroesService:HeroesService) { 
    //Observador de cambios, es como suscribirse
    this.activatedRoute.params.subscribe(params=>{
      console.log(params);
      this.heroe=this.heroesService.getHeroe(params['id']);
    })
  }

 

}
