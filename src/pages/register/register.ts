import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SecuriteProvider } from '../../providers/securite/securite';
import {ElementRef } from '@angular/core';
import { User } from '../../models/user/user.model';
import { HomePage } from '../home/home';
import { ToastService } from '../../providers/toast/toast.service';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';

//import {Validators, FormBuilder, FormGroup } from '@angular/forms';
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage  {
  user = new User();
  public tableData: any;

// constructeur
  constructor( 
    public navCtrl: NavController,
    public navParams: NavParams, 
    public SecuriteProvider: SecuriteProvider,
    private elem: ElementRef,
    private toast: ToastService,
    private alertCtrl: AlertController
  ) { }

// la methode qui permet l'envoi des donnee vers l'api rest
register(){
  let formData = new FormData();
  formData.append('firstname', this.user.firstname);
  formData.append('lastname', this.user.lastname);
  formData.append('email', this.user.email);
  formData.append('plainPassword', this.user.plainPassword);

  this.SecuriteProvider.postUser(formData).subscribe(res=> this.user);
      this.presentAlert();
      this.navCtrl.setRoot(LoginPage);
}
// Alert de confirmation
presentAlert() {
  const alert = this.alertCtrl.create({
        title: 'Authentification',
        subTitle: 'Utilisateur Bien ajouté',
        buttons: ['Ok']
        });
        alert.present();
      }
}
