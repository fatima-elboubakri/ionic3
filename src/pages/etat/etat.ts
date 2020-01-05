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
import { Subject } from 'rxjs';
import { PaginationProvider } from '../../providers/pagination/pagination';
import { RecrutePage } from '../recrute/recrute';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-etat',
  templateUrl: 'etat.html',
})
export class EtatPage implements OnInit{

  pager: any = {};
  pagedItems: any[];
  etat= new Etat();
  selection = new Selection();
  searchTerm: string = '';
  user : any;
  candidats:any;
  etats:any;
  selections: any;
  public user_info:any;
  public token;
  public id_selection;
  statusCode: number;
  searchResults: any;
  search:string='';

  constructor(private securityprovider: SecuriteProvider,
              public navCtrl: NavController, 
              public navParams: NavParams,
              private candidatProvider:CandidatProvider,
              private recruteProvider: RecruteProvider,
              private toast: ToastService,
              private elem: ElementRef,
              private pagerService: PaginationProvider,
              private alertCtrl: AlertController) {
                  this.user = localStorage.getItem('user');
                  this.id_selection = this.navParams.get('selectid');
  }

  ngOnInit(): void {
    this.user_info=localStorage.getItem('user_info');
    this.candidatProvider.getAllCandidat().subscribe((data) => {
      this.candidats= data;
      console.log('my candidats'+data);
    });

    this.recruteProvider.getEtat().subscribe((data) => {
      this.etats= data;
      console.log('my etat ORDRE'+data);
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
    } 
  );
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

//Popup d'alert
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
  } );
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
          this.recruteProvider.deleteSelection(id).subscribe((data:any)=>{
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

updateRecrute(selection: any) {
  //let profileModal = this.modal.create('RecruteEditPage');
  this.navCtrl.push(RecruteEditPage);
  //profileModal.present();
}

afficher(ids) {
  var x = document.getElementById("critere");
  var cmp=0;
  var list;
  if (x.style.display === "none") {
      x.style.display = "block";
      }
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
  for (let index = 0; index < mys.length; index++) {
    const ele = mys[index];
    if (element.checked) { 
      cmp=cmp+1;
    }else{
      this.presentAlert6();
    }
  }
}

sendMail(){
}

gotoedit(e){
  this.navCtrl.push(RecruteEditPage,{etat:e});
}
}