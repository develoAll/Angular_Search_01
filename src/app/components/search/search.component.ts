import { Component, OnInit } from '@angular/core';
import { HeroeService, Heroe } from '../../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor(private heroeService: HeroeService, private activatedRoute: ActivatedRoute ) {
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this.heroeService.buscarHeroe( params['termino']);
      console.log(this.heroes);
    });
  }

}
