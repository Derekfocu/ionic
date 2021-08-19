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

  nextfinalpage() {
    this.route.navigate(['/home/wash-products']);
  }

  ngOnInit() {
  }

}
