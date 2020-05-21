import { Component, OnInit } from '@angular/core';
import { HeroeService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private heroeService: HeroeService, private router: Router) {
  }
  // esta funcion hace poder traer los valores del arreglo del servicio
  ngOnInit() {
    this.heroes = this.heroeService.getHeroes();
  }

  verHeroe( idx: number ) {
    this.router.navigate(['heroe', idx]);
  }
}


