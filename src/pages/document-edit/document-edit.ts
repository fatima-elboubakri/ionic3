import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Document } from '../../models/document/document.model';
import { DocumentProvider } from '../../providers/document/document';
import { DocumentsPage } from '../documents/documents';
import { CandidatProvider } from '../../providers/candidat/candidat';
import { SecuriteProvider } from '../../providers/securite/securite';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-document-edit',
  templateUrl: 'document-edit.html',
})
export class DocumentEditPage  implements OnInit{
  //instances des classes
  document= new Document;
  candidats: any;
  user:any;
  statusCode: number;
  user_info:any;
  public token;

  constructor(private securityprovider: SecuriteProvider,
              public navCtrl: NavController, 
              public navParams: NavParams,
              private documentProvider: DocumentProvider,
              private candidatProvider: CandidatProvider,
              private alertCtrl: AlertController) {
                  this.document=this.navParams.get('document');
                  this.user=localStorage.getItem('user');
                  this.user_info=localStorage.getItem('user_info');
                }

ngOnInit() {
    this.candidatProvider.getCandidat().subscribe((data) => {
      this.candidats= data;
      console.log('my Documents'+data);
    });
  }
  
//popup d'alert
presentAlert() {
    const alert = this.alertCtrl.create({
          title: 'Message',
          subTitle: 'Document modifier avec success !!',
          buttons: ['Ok']
          });
          alert.present();
        }

// la methode qui permet l'envoi des donnee vers l'api rest
saveDocument(){
  this.documentProvider.updateDocument(this.document).subscribe((successCode) => {
        this.document[''] = successCode;
        this.presentAlert();
        this.navCtrl.push(DocumentsPage);
},
  errorCode => this.statusCode = errorCode);
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

