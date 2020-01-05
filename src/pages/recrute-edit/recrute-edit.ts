import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Alert, ActionSheetController, Select } from 'ionic-angular';
import { ModalController} from 'ionic-angular';
import { CandidatProvider } from '../../providers/candidat/candidat';
import { SecuriteProvider } from '../../providers/securite/securite';
import { LoginPage } from '../login/login';
import { RecruteProvider } from '../../providers/recrute/recrute';
import { ToastService } from '../../providers/toast/toast.service';
import { Etat } from '../../models/selection/etat.model';
import { Selection } from '../../models/selection/selection.model';
import { getLocaleDateTimeFormat, getLocaleDateFormat } from '@angular/common';
import { User } from '../../models/user/user.model';
import { HomePage } from '../home/home';
import { RecrutePage } from '../recrute/recrute';
import { ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-recrute-edit',
  templateUrl: 'recrute-edit.html',
})
export class RecruteEditPage{
   private etat:any;
  private etats:any;
  statusCode: number;

  constructor( private formBuilder: FormBuilder ,
              private recruteProvider: RecruteProvider, 
              public navParams: NavParams,
              public navCtrl: NavController,
              private alertCtrl: AlertController) {
                this.etat = this.navParams.get('etat');
                console.log("mon etat actuelle: "+this.etat)
  }

updateEtat(){
    this.recruteProvider.updateEtat(this.etat, this.etat.id).subscribe((successCode) => {
          this.etats= successCode;
          this.presentAlert();
          this.recruteProvider.getRecrute();	
          this.navCtrl.push(RecrutePage);
 },
 errorCode => this.statusCode = errorCode);
}

presentAlert() {
  const alert = this.alertCtrl.create({
        title: 'Message',
        subTitle: 'Etat modifié avec success',
        buttons: ['Ok']
        });
        alert.present();
      }
}
