import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-wash-location',
  templateUrl: './wash-location.page.html',
  styleUrls: ['./wash-location.page.scss'],
})
export class WashLocationPage implements OnInit {

  constructor(private route: Router) { }

  nextpage() {
    this.route.navigate(['/home/wash-location-detail']);
  }

  ngOnInit() {
  }

}
