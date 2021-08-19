import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userName: string;
  password: string;
  validUser = true;

  constructor(
    private userService: UserService,
    private router: Router,
    public modalCtrl: ModalController
    ) { }

  ngOnInit() {
  }

  onLogin() {
    if (this.userService.isValidUser(this.userName, this.password)) {
      this.router.navigate(['/home/cars']);
    }else {
      this.validUser = false;
    }
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }
}
