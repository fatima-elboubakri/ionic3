import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CandidatProvider } from '../../providers/candidat/candidat';
import { SecuriteProvider } from '../../providers/securite/securite';
import { LoginPage } from '../login/login';
import { RecruteProvider } from '../../providers/recrute/recrute';
import { ToastService } from '../../providers/toast/toast.service';
import { Etat } from '../../models/selection/etat.model';
import { Selection } from '../../models/selection/selection.model';
import { RecruteEditPage } from '../recrute-edit/recrute-edit';
import { RapportsPage } from '../rapports/rapports';
import { PaginationProvider } from '../../providers/pagination/pagination';
import { SelectionEditPage } from '../selection-edit/selection-edit';
import { EmailComposer } from '@ionic-native/email-composer';
import { RecruteMessagePage } from '../recrute-message/recrute-message';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-recrute',
  templateUrl: 'recrute.html',
})
export class RecrutePage implements OnInit{
  
  @ViewChild('sujet') sujet;
  @ViewChild('message') message;
    pager: any = {};
    pagedItems: any[];
    searchTerm: string = '';
    searchResults: any;
    search:string='';
    cbChecked:any;
    etat= new Etat();
    selection = new Selection();
    user : any;
    candidats:any;
    etats:any;
    email:any;
    selections: any;
    public user_info:any;
    public token;
    public id_selection;
    statusCode: number;

    constructor(private securityprovider: SecuriteProvider,
                public navCtrl: NavController, 
                public navParams: NavParams,
                private candidatProvider:CandidatProvider,
                private recruteProvider: RecruteProvider,
                private toast: ToastService,
                private pagerService: PaginationProvider,
                private alertCtrl: AlertController) {
                  this.user = localStorage.getItem('user');
                  this.id_selection = this.navParams.get('selectid');
                  this.cbChecked = [];
              }

ngOnInit(): void {
    this.user_info=localStorage.getItem('user_info');
    this.candidatProvider.getAllCandidat().subscribe((data) => {
      this.candidats= data;
      console.log('my candidats'+data);
    });
    this.recruteProvider.getEtat().subscribe((data) => {
      this.etats= data;
      console.log('my etat'+data);
    });
    this.recruteProvider.getRecrute().subscribe((data) => {
      this.selections= data;
      this.setPage(1);
      console.log('my recrute'+data);
    });
  }
 
setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }
    // get pager object from service
    this.pager = this.pagerService.getPager(this.selections.length, page);
    // get current page of items
    this.pagedItems = this.selections.slice(this.pager.startIndex, this.pager.endIndex + 1);
}

Search(){
  this.recruteProvider.getSearch(this.search).subscribe((data) => {
    this.recruteProvider.getRecrute();
    this.selections = data;
    this.setPage(1);
    console.log(data);
  })
    }

deconnexion(){
  this.token=localStorage.getItem('token');
  this.securityprovider.deconnexion().subscribe(
    (res) =>{
          res
          this.navCtrl.setRoot(LoginPage);
              });
}

ajoutEtat(){
  let formData = new FormData();
  formData.append('ordre_etat', this.etat.ordre_etat);
  formData.append('libelle_etat', this.etat.libelle_etat);
  formData.append('user', this.user);
        this.recruteProvider.postEtat(formData).subscribe((res)=>{
        if (res>=0) {
          this.presentAlert();
        }else{
         this.presentAlert1();
          this.navCtrl.push(RapportsPage);
        }
      } );
}
presentAlert() {
  const alert = this.alertCtrl.create({
        title: 'Message',
        subTitle: 'Cet élément déjà existe',
        buttons: ['Ok']
        });
        alert.present();
      }  
presentAlert1() {
   const alert = this.alertCtrl.create({
         title: 'Message',
         subTitle: 'Nouvel état a été ajouter avec success',
         buttons: ['Ok']
          });
            alert.present();
            }      

addSelection(){
  let formData = new FormData();
  let date_today = new Date();
  formData.append('date_selection', ""+date_today);
  formData.append('etat', this.selection.etat);
  formData.append('candidat', this.selection.candidat);
  formData.append('user', this.user);

    this.recruteProvider.postSelection(formData).subscribe((res)=>{
        this.selection
        this.toast.presentToast("Un recrutement a été bien Ajouté !!");
        this.navCtrl.setRoot(RecrutePage);
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
  });
}

//method de supprission
deleteEtat(id: number) {
  this.recruteProvider.deleteEtat(id)
  this.navCtrl.push(RecrutePage); 
}
presentAlert3() {
  const alert = this.alertCtrl.create({
        title: 'Message',
        subTitle: 'Etat supprimé avec success',
        buttons: ['Ok']
    });
      alert.present();
      }  
presentConfirm(id : number) {
  let alert = this.alertCtrl.create({
      title: 'Confiration',
      message: 'Voulez-vous Supprimer cet état ??',
      buttons: [
      {
        text: 'Annuler',
        role: 'Annuler',
        handler: () => {
          console.log('Annuler clicked');
        }
      },
      {
        text: 'Supprimer',
        handler: () => {
          this.recruteProvider.deleteEtat(id).subscribe(data=>{
            this.recruteProvider.getEtat();
          });
          this.recruteProvider.getEtat();
          this.presentAlert3(); 
          this.recruteProvider.getEtat();
           this.navCtrl.push(RecrutePage);
        }
      }
    ]
  });
  alert.present();
}

//method de supprission
deleteRecrute(id: number) {
    this.presentConfirm2(id);
    this.navCtrl.push(RecrutePage);
    this.navCtrl.setRoot(RecrutePage);
  }

presentConfirm2(id : number) {
    let alert = this.alertCtrl.create({
      title: 'Confiration',
      message: 'Voulez-vous Supprimer ce recrutement??',
      buttons: [
        {
          text: 'Annuler',
          role: 'Annuler',
          handler: () => {
            console.log('Annuler clicked');
          }
        },
        {
          text: 'Supprimer',
          handler: () => {
            this.recruteProvider.deleteSelection(id)
            .subscribe((data:any)=>{
            this.presentAlert4();
            this.navCtrl.push(RecrutePage);
            this.recruteProvider.getRecrute();
          }, (err) => {
            this.presentAlert5();
          });
    }
          }
      ]
    });
    alert.present();
  }

presentAlert4() {
  const alert = this.alertCtrl.create({
          title: 'Message',
          subTitle: 'Recrutement supprimé avec success',
          buttons: ['Ok']
        });
        alert.present();
      }

presentAlert5() {
        const alert = this.alertCtrl.create({
                title: 'Message',
                subTitle: 'Error 404',
                buttons: ['Ok']
              });
              alert.present();
      
            }

updateRecrute(selection: any) {
  this.navCtrl.push(RecruteEditPage);
}

afficherEtat() {
  var x = document.getElementById("afficheretat");
  if (x.style.display === "none") {
      x.style.display = "block";
    
  } 
}

presentAlert6() {
  const alert = this.alertCtrl.create({
          title: 'Message',
          subTitle: 'Aucun "élément selectionner',
          buttons: ['Ok']
        });
        alert.present();
      }

editerRecrute(mys){
  let element = <HTMLInputElement> document.getElementById("checki");  
  var cmp = 0;
  window.alert(mys.etat.libelle_etat);
  for (let index = 0; index < mys.length; index++) {
    const ele = mys[index];
    if (element.checked) { 
      cmp=cmp+1;
    }else{
      this.presentAlert6();
    }
    }
}

afficher(chBox, event) {
  var x = document.getElementById("recr");
  if (x.style.display === "none") {
      x.style.display = "block";
  }
var cbIdx = this.cbChecked.indexOf(chBox);
if(event.target.checked) {
    if(cbIdx < 0 ){
         this.cbChecked.push(chBox);
       console.log(chBox);
    }
} else {
    if(cbIdx >= 0 ){
       this.cbChecked.splice(cbIdx,1);
        console.log(cbIdx);
    }
}
}

editSelection(){
//inthe method is just fpor the redirection
this.navCtrl.setRoot(SelectionEditPage, {cbChecked: this.cbChecked});
}
sendemail(){
  let formData = new FormData();
  for (let index = 0; index < this.cbChecked.length; index++) {
    let element = this.cbChecked[index]['candidat']['email_candidat'];
      formData.append('to',element);
      formData.append('subject',this.sujet);
      formData.append('message',this.message);
      this.recruteProvider.postEmail(formData).subscribe((data) => {
        this.presentAlertMessage();
        console.log('my msg'+data);
          });
}
}

reload_page(){
  this.presentAlertMessage();
}

presentAlertMessage() {
  const alert = this.alertCtrl.create({
          title: 'Message',
          subTitle: 'Votre message à été envoyé',
          buttons: [
            {
              text: 'OK',
              handler: () => {
                  this.navCtrl.setRoot(RecrutePage);
              }
            }
          ]
        });
        alert.present();
      }
}
