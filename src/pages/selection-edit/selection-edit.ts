import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecruteProvider } from '../../providers/recrute/recrute';
import { Etat } from '../../models/selection/etat.model';
import { SELECT_MULTIPLE_VALUE_ACCESSOR } from '@angular/forms/src/directives/select_multiple_control_value_accessor';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the SelectionEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selection-edit',
  templateUrl: 'selection-edit.html',
})

export class SelectionEditPage implements OnInit {

  cbChecked:any;
  etats:any;
  etat: any;
  date_selection:Date;
  user : any;
  @ViewChild('myetat') myetat;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,  
              private recruteProvider: RecruteProvider,
              private elem: ElementRef,
              private alertCtrl: AlertController) {
                this.user = localStorage.getItem('user');
                this.cbChecked = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectionEditPage'+this.cbChecked.nom_candidat);
  }

  ngOnInit(){
    this.cbChecked = this.navParams.get('cbChecked');
    this.recruteProvider.getEtat().subscribe((data) => {
      this.etats= data;
      console.log('my etat'+data);
    });
  }

  updateSelection(){
    console.log(this.cbChecked);
    let formData = new FormData();
    let date =new Date();
    let etati=this.elem.nativeElement.querySelector('#myetat');
    console.log('selection avant etat'+this.etat);
    for (let index = 0; index < this.cbChecked.length; index++) {
      let element = this.cbChecked[index]['id'];
      formData.append('date_selection', date.toLocaleDateString());
      formData.append('id_candidat',element);
      formData.append('etat',this.etat);
      formData.append('user', this.user);
      this.recruteProvider.postSelectionEdit(formData).subscribe((res:any)=>{
          if(res.taille <= 0){
           console.log('selection bien ajouter candidat'+element.id);
           console.log('selection bien ajouter etat'+this.etat);
            this.presentAlert1();
          }else{
            console.log('etat  occueid for'+res);
            this.presentAlert();
          }})
    }
  }
  
presentAlert() {
    const alert = this.alertCtrl.create({
          title: 'Message',
          subTitle: 'candidat est déja dans cette etat',
          buttons: ['Ok']
          });
          alert.present();
          }       

presentAlert1() {
    const alert = this.alertCtrl.create({
          title: 'Message',
          subTitle: 'Etat du processus de recrutement est modifié avec succès',
          buttons: ['Ok']
          });
          alert.present();
        }    
}
