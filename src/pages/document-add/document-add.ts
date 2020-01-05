import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Document } from '../../models/document/document.model';
import { DocumentProvider } from '../../providers/document/document';
import { DocumentsPage } from '../documents/documents';
import { CandidatProvider } from '../../providers/candidat/candidat';
import { SecuriteProvider } from '../../providers/securite/securite';
import { File } from '@ionic-native/file';
import * as pdfmake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-document-add',
  templateUrl: 'document-add.html',
})
export class DocumentAddPage  implements OnInit{
  //instances des classes
  document= new Document();
  candidats: any;
  documentUpdate: any;
  user:any;
  public token;
  user_info:any;

  constructor(private securityprovider: SecuriteProvider,
              public navCtrl: NavController, 
              public navParams: NavParams,
              private documentProvider: DocumentProvider,
              private candidatProvider: CandidatProvider,
              private plt: Platform, 
              private file: File,
              private alertCtrl: AlertController
            ) {
                this.user=localStorage.getItem('user');
                this.user_info=localStorage.getItem('user_info');
  }

ngOnInit() {
   //candidat
    this.candidatProvider.getAllCandidat().subscribe((data) => {
      this.candidats= data;
      console.log('my Documents'+data);
    });
  }

// la methode qui permet l'envoi des donnee vers l'api rest
saveDocument(){
    let formData = new FormData();
    formData.append('titre_document', this.document.titre_document	);
    formData.append('objet_document', this.document.objet_document);
    formData.append('date_creation_document', this.document.date_creation_document);
    formData.append('corps_document', this.document.corps_document);
    formData.append('signature_document', this.document.signature_document);
    formData.append('id_candidat', this.document.candidat);
    formData.append('user_id', this.user);

    this.documentProvider.postDocument(formData).subscribe(res=> this.document);
    this.presentAlert();
    this.navCtrl.setRoot(DocumentsPage);
    //this.navCtrl.setRoot(this.navCtrl.getActive().component);
 }

presentAlert() {
  const alert = this.alertCtrl.create({
        title: 'Message',
        subTitle: 'Document Bien Ajouté !!',
        buttons: ['Ok']
        });
        alert.present();
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
  