import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  constructor(private route: Router) { }

  nextpage() {
    this.route.navigate(['/home/profile']);
  }

  nextfinalpage() {
    this.route.navigate(['/home/about-us']);
  }

  presentModal() {
    this.route.navigate(['/welcome']);
  }

  ngOnInit() {
  }

  toggleTheme(event){
    if(event.detail.checked){
      document.body.setAttribute('color-theme', 'dark');
    }else{
      document.body.setAttribute('color-theme','lighr');
    }
  }
}
