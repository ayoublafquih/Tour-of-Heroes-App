import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) { }

  ngOnInit() {
    this.getHero()
  }

  getHero(): void {
    
    this.route.paramMap.subscribe(params=>{
      const id =  parseInt(params.get('id'))
      this.heroService.getHero(id).subscribe(hero => this.hero = hero)
    })
  }

  goBack() {
    this.location.back();
  }

}
