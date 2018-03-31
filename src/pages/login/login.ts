import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(public navCtrl: NavController) {
  }
  onSignUp()
  {
    this.navCtrl.setRoot(SignupPage);
  }
}
