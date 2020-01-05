import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SecuriteProvider } from '../../providers/securite/securite';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {
public token;
public user_info:any;
  constructor(private securityprovider: SecuriteProvider,
              public navCtrl: NavController, 
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.user_info=localStorage.getItem('user_info');
  }

  deconnexion(){
    this.token=localStorage.getItem('token');
    this.securityprovider.deconnexion().subscribe(
      (res) =>{
          res
          this.navCtrl.setRoot(LoginPage);
      } 
    );
  }
}
