import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecruteProvider } from '../../providers/recrute/recrute';
import { AlertController } from 'ionic-angular';
import { RecrutePage } from '../recrute/recrute';

@IonicPage()
@Component({
  selector: 'page-recrute-message',
  templateUrl: 'recrute-message.html',
})
export class RecruteMessagePage {
  cbChecked:any;
  
@ViewChild('sujet') sujet;
@ViewChild('message') message;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private recruteProvider: RecruteProvider,
              private alertCtrl: AlertController) {
              this.cbChecked = [];
  }

ionViewDidLoad() {
  console.log('ionViewDidLoad RecruteMessagePage');
  }

sendemail(){
  let formData = new FormData();
  for (let index = 0; index < this.cbChecked.length; index++) {
  let element = this.cbChecked[index]['candidat']['email_candidat'];
    
  formData.append('to',element);
  formData.append('subject',this.sujet);
  formData.append('message',this.message);
  this.recruteProvider.postEmail(formData).subscribe((data) => {
    this.presentAlert();
    console.log('my msg'+data);
       });
  }
  }

  presentAlert() {
    const alert = this.alertCtrl.create({
          title: 'Message',
          subTitle: 'Votre message à été envoyé',
          buttons: [
              {
                text: 'OK',
                handler: () => {
                    this.navCtrl.setRoot(RecrutePage);
                }}]
          });
          alert.present();
          }
}
