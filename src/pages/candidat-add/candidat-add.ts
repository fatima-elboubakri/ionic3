import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CandidatProvider } from '../../providers/candidat/candidat';
import {ElementRef } from '@angular/core';
import { Candidat } from '../../models/candidat/candidat.model';
import { HomePage } from '../home/home';
import { ToastService } from '../../providers/toast/toast.service';
import { CandidatsPage } from '../candidats/candidats';
import { SecuriteProvider } from '../../providers/securite/securite';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';
import { Ville } from '../../models/ville/ville.model';
import { Experience } from '../../models/experience/experience.model';
import { Specialite } from '../../models/specialite/specialite.model';
import { NiveauEtude } from '../../models/niveauetude/niveauetude.model';
import { Titre } from '../../models/titre/titre.model';

@IonicPage()
@Component({
  selector: 'page-candidat-add',
  templateUrl: 'candidat-add.html'
})
export class CandidatAddPage implements OnInit {
//instanciation du class candidat
  candidat = new Candidat();
  ville= new Ville();
  experience= new Experience();
  specialite = new Specialite();
  niveauetude= new NiveauEtude();
  titre= new Titre();
  specialites:any;
  villes:any;
  titres:any;
  niveauEtude:any;
  experiences:any;
  user:any;
  user_info:any;
  public token;
 // constructeur
 constructor( private securityprovider: SecuriteProvider,
              public navCtrl: NavController,
              public navParams: NavParams, 
              public restService: CandidatProvider,
              private elem: ElementRef,
              private toast: ToastService,
              private alertCtrl: AlertController) {
                    this.user=localStorage.getItem('user');
                    this.user_info=localStorage.getItem('user_info');
     }

// la méthode qui permet l'envoi des donnee vers l'api rest
saveCandidat(){
  let file1 = this.elem.nativeElement.querySelector('#photo_can').files;
  let file2 = this.elem.nativeElement.querySelector('#cv_can').files;
  let photo = file1[0];
  let cv = file2[0];
  let formData = new FormData();
  formData.append('nom_candidat', this.candidat.nom_candidat);
  formData.append('prenom_candidat', this.candidat.prenom_candidat);
  formData.append('genre_candidat', this.candidat.genre_candidat);
  formData.append('photo_candidat', photo, this.candidat.photo_candidat);
  formData.append('ville', this.candidat.ville);
  formData.append('telephone_candidat', this.candidat.telephone_candidat);
  formData.append('email_candidat', this.candidat.email_candidat);
  formData.append('specialite', this.candidat.specialite);
  formData.append('niveau_etude', this.candidat.niveau_etude);
  formData.append('experience', this.candidat.experience);
  formData.append('titre', this.candidat.titre);
  formData.append('desc_candidat', this.candidat.desc_candidat);
  formData.append('cv_candidat', cv, this.candidat.cv_candidat);
  formData.append('user', this.user);
     this.restService.postCandidat(formData).subscribe((res)=>{
     this.presentAlert();
    this.navCtrl.setRoot(CandidatsPage);
  } );
 }

// Popup de confirmation
presentAlert() {
  const alert = this.alertCtrl.create({
        title: 'Message',
        subTitle: 'Candidat bien ajouté ',
        buttons: [
            {
              text: 'OK',
              handler: () => {
                  this.navCtrl.setRoot(CandidatsPage);
              }
            }
          ]
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

reload_page(){
  this.navCtrl.setRoot(CandidatAddPage);
}

// ville -> la méthode qui permet l'envoi des donnee vers l'api rest
saveVille(){
  let formData = new FormData();
  formData.append('libelle_ville', this.ville.libelle_ville);
    this.restService.postVille(formData).subscribe((res)=>{
      this.presentAlert1();
      this.navCtrl.setRoot(CandidatAddPage);
  } );
 }

// Popup de confirmation d'ajout d'une ville 
presentAlert1() {
  const alert = this.alertCtrl.create({
        title: 'Message',
        subTitle: 'Ville bien ajoutée ',
        buttons: [
          {
            text: 'OK',
            handler: () => {
            this.navCtrl.setRoot(CandidatAddPage);
              }
            }
          ]
        });
        alert.present();
      }

// Experience -> la méthode qui permet l'envoi des donnee vers l'api rest
saveExperience(){
  let formData = new FormData();
  formData.append('libelle_experience', this.experience.libelle_experience);
    this.restService.postExperience(formData).subscribe((res)=>{
      this.presentAlert2();
      this.navCtrl.setRoot(CandidatAddPage);
  } );
 }

// Popup de confirmation
presentAlert2() {
  const alert = this.alertCtrl.create({
        title: 'Message',
        subTitle: 'Experience bien ajoutée',
        buttons: [
            {
              text: 'OK',
              handler: () => {
                  this.navCtrl.setRoot(CandidatAddPage);
              }
            }
          ]
        });
        alert.present();
      }
  
// Specialite -> la méthode qui permet l'envoi des donnee vers l'api rest
saveSpecialite(){
  let formData = new FormData();
  formData.append('libelle_specialite', this.specialite.libelle_specialite);
    this.restService.postSpecilaite(formData).subscribe((res)=>{
      this.presentAlert3();
      this.navCtrl.setRoot(CandidatAddPage);
  } );
 }

// Popup de confirmation
presentAlert3() {
  const alert = this.alertCtrl.create({
        title: 'Message',
        subTitle: 'Spacialité bien ajoutée ',
        buttons: [
            {
              text: 'OK',
              handler: () => {
                  this.navCtrl.setRoot(CandidatAddPage);
              }
            }
          ]
        });
        alert.present();
      }

// Niveau Etude -> la méthode qui permet l'envoi des donnee vers l'api rest
saveNiveauEtude(){
  let formData = new FormData();
  formData.append('libelle_NiveauEtude', this.niveauetude.libelle_NiveauEtude);
     this.restService.postNiveauetude(formData).subscribe((res)=>{
      this.presentAlert4();
      this.navCtrl.setRoot(CandidatAddPage);
  } );
 }

// Popup de confirmation
presentAlert4() {
  const alert = this.alertCtrl.create({
        title: 'Message',
        subTitle: 'Niveau Etude bien ajouté ',
        buttons: [
            {
              text: 'OK',
              handler: () => {
                  this.navCtrl.setRoot(CandidatAddPage);
              }
            }
          ]
        });
        alert.present();
      }

// Titre -> la méthode qui permet l'envoi des donnee vers l'api rest
saveTitre(){
  let formData = new FormData();
  formData.append('libelle_titre', this.titre.libelle_titre);
     this.restService.postTitres(formData).subscribe((res)=>{
     this.presentAlert5();
    this.navCtrl.setRoot(CandidatAddPage);
  } );
 }
 
 // Popup de confirmation
presentAlert5() {
  const alert = this.alertCtrl.create({
        title: 'Message',
        subTitle: 'Titre bien ajouté ',
        buttons: [
            {
              text: 'OK',
              handler: () => {
                  this.navCtrl.setRoot(CandidatAddPage);
              }
            }
          ]
        });
        alert.present();
      }
}
