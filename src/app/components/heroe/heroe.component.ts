import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};

  constructor( private activatedRoute: ActivatedRoute, private heroeService: HeroeService ) {

    this.activatedRoute.params.subscribe( parametro => {
      this.heroe = this.heroeService.getHeroe ( parametro['id']);
    });

  }

}
