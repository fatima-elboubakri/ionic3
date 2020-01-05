import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RechercheProvider } from '../../providers/recherche/recherche';
import { HttpClient } from '@angular/common/http';
import { SecuriteProvider } from '../../providers/securite/securite';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-recherche',
  templateUrl: 'recherche.html',
})
export class RecherchePage implements OnInit{
  search: string;
  region: string;
  tri: string;
  resultat:any ; 
  result:any;
  errorMessage: string;
  public token;
  public user_info:any;

constructor(private securityprovider: SecuriteProvider,
            public navCtrl: NavController,
            public navParams: NavParams,public http: HttpClient,
            public sourcingService: RechercheProvider) {
              this.user_info=localStorage.getItem('user_info');
  }

ngOnInit(){
  this.user_info=localStorage.getItem('user_info');
  if(this.search == null){
    this.resultat = [];
  }else{
    let formData = new FormData();
    formData.append('q', this.search);
    formData.append('cr', this.region);
    formData.append('exactTerms', this.tri);
    formData.append('sort', 'date');

    this.sourcingService.getSearchgoogle(formData).subscribe((data) => {
      this.resultat = data;
      this.result = this.resultat.items;
      console.log('my titre: '+this.result);
      console.log('my result: '+this.resultat['items']);
    })
  }
 }
//search linkedin
urlLinkedIn(){
  window.location.href='https://cse.google.com/cse/publicurl?cx=005036102548016141645:pczfojlrwum';
}
//search viadeo  
urlViadeo(){
  window.location.href='https://cse.google.com/cse/publicurl?cx=005036102548016141645:pczfojlrwum';
}
gotourl(link){
  window.location.href=link;
}
Search()
    {
      let formData = new FormData();
      formData.append('q', this.search);
      formData.append('cr', this.region);
      formData.append('exactTerms', this.tri);
      formData.append('sort', 'date');
      this.sourcingService.getSearchgoogle(formData).subscribe ((data) => {
        this.resultat = data;
        this.result = data;
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
}
