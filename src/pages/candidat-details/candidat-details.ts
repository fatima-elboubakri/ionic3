import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CandidatProvider } from '../../providers/candidat/candidat';
import {ElementRef } from '@angular/core';
import { HomePage } from '../home/home';
import { ToastService } from '../../providers/toast/toast.service';
import { CandidatsPage } from '../candidats/candidats';
import { Candidat } from '../../models/candidat/candidat.model';
import { FileUploaderService } from '../../providers/candidat/file-uploader-service';
import { SecuriteProvider } from '../../providers/securite/securite';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-candidat-details',
  templateUrl: 'candidat-details.html',
})

export class CandidatDetailsPage {
  public user_info:any;
  candidat:any;
  statusCode: number;
  desc=[];
  specialites:any;
  villes:any;
  titres:any;
  niveauEtude:any;
  experiences:any;
  public tableData: any;
  public token;
  constructor(private securityprovider: SecuriteProvider,
              public navCtrl: NavController,
              public navParams: NavParams, 
              public restService: CandidatProvider,
              private elem: ElementRef,
              private toast: ToastService,
              private fileUploader: FileUploaderService,
              private alertCtrl: AlertController ) { 
                this.candidat = this.navParams.get('candidat');
                //this.comp = this.candidat.competence.libelle_competence.split(' ');
                this.desc = this.candidat.desc_candidat.split(' ');
  }

  //La fonction qui permet la modification d'un candidat
  editCandidat(){
    console.log(this.candidat);
    this.restService.updateCandidat(this.candidat).subscribe((successCode) => {
              this.candidat[''] = successCode;
              this.presentAlert();
              this.restService.getCandidat();	
              this.navCtrl.push(CandidatsPage);
 },
 errorCode => this.statusCode = errorCode);
}

// la methode qui permet l'envoi des donnee vers l'api rest
updateImage(){
  let files = this.elem.nativeElement.querySelector('#selectFile').files;
  let formData = new FormData();
  let file = files[0];
  //let file1 = files[1];
  formData.append('selectFile', file, file.name);
  formData.append('id',this.candidat.id);
  this.fileUploader.uploadImageupdate(formData).subscribe((res)=> {
      this.presentAlert1();    
  });
  this.presentAlert1();
}

updateCV() {
  let files = this.elem.nativeElement.querySelector('#cv').files;
  let formData = new FormData();
  let file = files[0];
  formData.append('cv', file, file.name);
  formData.append('id', this.candidat.id);
  this.fileUploader.uploadcvupdate(formData).subscribe((res)=> {
  this.presentAlert1();
});
this.presentAlert1();
}

// Popup de confirmation
presentAlert() {
  const alert = this.alertCtrl.create({
        title: 'Message',
        subTitle: 'Candidat modifié avec succès',
        buttons: ['Ok']
        });
        alert.present();

      }
// Popup de confirmation
presentAlert1() {
  const alert = this.alertCtrl.create({
        title: 'Message',
        subTitle: 'Bien édité',
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

ngOnInit() {
  this.user_info=localStorage.getItem('user_info');
  //ville
  this.restService.getVilles().subscribe((data) => {
    this.villes= data;
    console.log(data);
  });

  //specialite
  this.restService.getSpecialites().subscribe((data) => {
    this.specialites= data;
    console.log(data);
});

//titre
  this.restService.getTitres().subscribe((data) => {
    this.titres= data;
    console.log(data);
});

  //experience
  this.restService.getExperiences().subscribe((data) => {
    this.experiences= data;
    console.log(data);
});

//niveau d'etude
  this.restService.getNiveauEtude().subscribe((data) => {
    this.niveauEtude= data;
    console.log("niveau d'etude"+data);
});
}
  }



