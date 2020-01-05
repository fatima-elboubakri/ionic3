import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {  OnInit } from '@angular/core';
import { Candidat } from '../../models/candidat/candidat.model';
import {CandidatProvider  } from '../../providers/candidat/candidat';
import { ToastService } from '../../providers/toast/toast.service';
import 'rxjs/add/operator/debounceTime';
import { PaginationProvider } from '../../providers/pagination/pagination';
import { SecuriteProvider } from '../../providers/securite/securite';
import { LoginPage } from '../login/login';
import { RecruteProvider } from '../../providers/recrute/recrute';
import { Etat } from '../../models/selection/etat.model';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-candidats',
  templateUrl: 'candidats.html',
})

export class CandidatsPage implements OnInit {
  public user_info:any;
  public user:any;
  specialites:any;
  villes:any;
  titres:any;
  niveauEtude:any;
  experiences:any;
  etat:Etat;
  
  @ViewChild('x') x: ElementRef;
  
//instance de classe candidat
  public critere: any;
  candidats:any;
  cbChecked:any;
//liste des attributs
  errorMessage: string;
  searchResults: any;
  search:string='';
  tri:string='';
  // pager object
  pager: any = {};
  // paged items
  pagedItems: any[];
  //declaration du variabe pour recherche critere
  todo: any[];
  //constructeur
  public token;
  constructor(
        private securityprovider: SecuriteProvider,
        private restService: CandidatProvider,
        private toastr: ToastService,
        public navCtrl: NavController,
        private pagerService: PaginationProvider,
        private elem: ElementRef,
        private recruteProvider: RecruteProvider,
        private alertCtrl: AlertController) {
          this.searchResults = this.candidats;
          this.cbChecked = [];
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad etat');
      this.recruteProvider.getFirstEtat().subscribe((data) => {
          this.etat = data;
          console.log('ionViewDidLoad etat : '+data.id);
        });
      }

  ngOnInit() {
    this.user_info=localStorage.getItem('user_info');
    this.user=localStorage.getItem('user');
    this.restService.getCandidat().subscribe((data) => {
      this.candidats = data;
      this.searchResults = data;
      this.setPage(1);
      console.log('my data'+data);
    })
  
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

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }
    // get pager object from service
    this.pager = this.pagerService.getPager(this.candidats.length, page);
    // get current page of items
    this.pagedItems = this.candidats.slice(this.pager.startIndex, this.pager.endIndex + 1);
}

  //method de supprission
  delete(id: number) {
    this.presentConfirm(id);
    this.navCtrl.push(CandidatsPage);
    this.navCtrl.setRoot(CandidatsPage);
    }

  Search(){
    this.restService.getSearch(this.search).subscribe((data) => {
    this.restService.getCandidat();
    this.candidats = data;
    this.setPage(1);
    console.log(data);
        if(data == 0){
          const alert = this.alertCtrl.create({
            title: 'Message',
            subTitle: 'Aucun profile ne correspond à la recherche.',
            buttons: ['Ok']
          });
          alert.present();
        }
      })
        }

  Tri(){
    this.restService.getOrder(this.tri).subscribe((data) => {
      this.restService.getCandidat();
      this.candidats = data;
      // initialize to page 1
      this.setPage(1);
      console.log(data);
        })
          }
    
  hideshow() {
    var x = document.getElementById("critere");
    if (x.style.display === "none") {
        x.style.display = "block";
        this.restService.getCandidat();
    } else {
        x.style.display = "none";
        this.restService.getCandidat();
            }
        }
        
  searchCandidat() {
    let genrex = this.elem.nativeElement.querySelector('#genrex').value;
    let titrex = this.elem.nativeElement.querySelector('#titrex').value;
    let adrx = this.elem.nativeElement.querySelector('#adrx').value;
    let netudex = this.elem.nativeElement.querySelector('#netudex').value;
    let expx = this.elem.nativeElement.querySelector('#expx').value; 
    let compx = this.elem.nativeElement.querySelector('#compx').value;
      if(genrex==""){
         genrex ="*";
            }
      if(titrex==""){
         titrex ="*";
            }
      if(adrx==""){
         adrx ="*";
            }
      if(netudex==""){
         netudex ="*";
            }
      if(expx==""){
         expx ="*";
            }
      if(compx==""){
         compx ="*";
            }
      this.restService.getSearchParam(genrex,titrex,adrx,netudex,expx,compx).subscribe((data) => {
        this.candidats = data;
        console.log(data);
        if(data == 0){
          const alert = this.alertCtrl.create({
                title: 'Message',
                subTitle: 'Aucun profile ne correspond à la recherche',
                buttons: ['Ok']
              });
                alert.present();
            }
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

  addSelection(){
    console.log(this.cbChecked);
    let formData = new FormData();
    let date =new Date();
    for (let index = 0; index < this.cbChecked.length; index++) {
        const element = this.cbChecked[index];
        formData.append('date_selection', date.toLocaleDateString());
        formData.append('id_candidat',element.id);
        formData.append('etat', '1');
        formData.append('user', this.user);
        this.recruteProvider.postSelection(formData).subscribe((res:any)=>{
          if(res.taille <= 0){
            console.log('selection bien ajouter candidat'+element);
            console.log('selection bien ajouter etat'+this.etat.id);
          }else{
            console.log('etat  occueid for'+res);
                  }  
              })
            }
          }
          // Popup de confirmation
  presentAlert() {
    const alert = this.alertCtrl.create({
          title: 'Message',
          subTitle: 'Candidat supprimé avec success',
          buttons: ['Ok']
                  });
          alert.present();
                }       

  presentConfirm(id : number) {
    let alert = this.alertCtrl.create({
        title: 'Confiration',
        message: 'Voulez-vous Supprimer ce candidat ??',
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
              this.restService.deleteCandidat(id).subscribe(data=>{
              this.restService.getCandidat();
                            });
              this.restService.getCandidat();
              this.presentAlert();
              this.restService.getCandidat();
              this.navCtrl.push(CandidatsPage);
                             }
                            }
                          ]
                        });
              alert.present();
                      }
        }
