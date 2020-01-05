import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SecuriteProvider } from '../../providers/securite/securite';
import {ElementRef } from '@angular/core';
import { User } from '../../models/user/user.model';
import { HomePage } from '../home/home';
import { ToastService } from '../../providers/toast/toast.service';
import { Login } from '../../models/user/login.model';
import { Observable } from 'rxjs/observable';
import { AlertController } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
 loginclass = new Login();
 public user_info:any;

  constructor( 
    public navCtrl: NavController,
    public navParams: NavParams, 
    public SecuriteProvider: SecuriteProvider,
    private elem: ElementRef,
    private toast: ToastService,
    private alertCtrl: AlertController) { 
     }

  ionViewDidLoad() {
      console.log('ionViewDidLoad HomePage');
      this.user_info=localStorage.getItem('user_info');
    }
  
 login(){
  this.SecuriteProvider.postToken(this.loginclass).subscribe((response: any) => {
    if(response.status==200){
      this.toast.presentToast("Connexion réussie");
      localStorage.setItem('token',response.value);
      localStorage.setItem('user',response.user.id);
      localStorage.setItem('user_info',response.user.firstname+" "+response.user.lastname);
      localStorage.setItem('token_id',response.id);
      this.presentAlert1();
      this.navCtrl.setRoot(HomePage);
    }
    else if(response.status == 400){
      this.presentAlert();
    }
},
  err => {
      console.log(err);
  })
}
presentAlert() {
  const alert = this.alertCtrl.create({
        title: 'Authentification',
        subTitle: 'Réessayer: email ou mot de passe incorrects',
        buttons: ['Ok']
        });
        alert.present();
      }

presentAlert1() {
  const alert = this.alertCtrl.create({
        title: 'Authentification',
        subTitle: 'Bienvenue '+this.user_info,
        buttons: ['Ok']
              });
        alert.present();
            }
}