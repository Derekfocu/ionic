import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.page.html',
  styleUrls: ['./cars.page.scss'],
})
export class CarsPage implements OnInit {

  constructor(private route: Router) { }

  nextpage() {
    this.route.navigate(['/home/wash-location']);
  }

  nextsecondpage() {
    this.route.navigate(['/home/vacancy-search']);
  }

  nextthirdpage() {
    this.route.navigate(['/home/route-planning']);
  }

  nextfourpage() {
    this.route.navigate(['/sky-weather']);
  }

  nextfinalpage() {
    this.route.navigate(['/home/wash-products']);
  }

  ngOnInit() {
  }

}
