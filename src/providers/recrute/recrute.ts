import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
/*
  Generated class for the RecruteProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RecruteProvider {

  readonly url = "http://localhost:8000/";
  
  constructor(private _httpClient: HttpClient) { }

//la method qui permet la recupuration des etats de recrutement
getEtat(): Observable<any> {
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('user');
    let headers = new HttpHeaders().set('X-Auth-Token',  token);
    return this._httpClient.get(this.url+"etats/"+user,{ headers:headers});
               }

//la method qui permet la recupuration des recrutement enregidtree
getRecrute(): Observable<any> {
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('user');
    let headers = new HttpHeaders().set('X-Auth-Token',  token);
    return this._httpClient.get(this.url+"recrutes/"+user,{ headers:headers});
               }

//la method post pour Ajouter un processus de recrutement
postEtat(etat: any) {
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders().set('X-Auth-Token',  token);
    return this._httpClient.post(this.url+"etats", etat,{ headers:headers});
  }

//la method post pour Ajouter un recrutement
postSelection(selection: any) {
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders().set('X-Auth-Token',  token);
    return this._httpClient.post(this.url+"recrutes", selection,{ headers:headers});
  }

//la method post pour Ajouter un recrutement
postSelectionEdit(selection: any) {
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders().set('X-Auth-Token',  token);
    return this._httpClient.post(this.url+"recrutes/edit", selection,{ headers:headers});
  }

// la method pour modifier les donnee d'une etat
updateEtat(etat: any, id:any) {
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('user');
    let headers = new HttpHeaders().set('X-Auth-Token',  token);
    return this._httpClient.put(this.url +"etats/"+id, etat,{ headers:headers});
}

//la method qui permet la supprission  d'une etat
deleteEtat(id: number) {
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('user');
    let headers = new HttpHeaders().set('X-Auth-Token',  token);
    // let options = new RequestOptions({ headers:headers});
    return this._httpClient.delete(this.url +"etats/" + id,{ headers:headers});
  }

// la method pour modifier les donnee d'un recrutement
updateSelection(recrute: any) {
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('user');
    let headers = new HttpHeaders().set('X-Auth-Token',  token);
    return this._httpClient.put(this.url +"recrutes/"+recrute.id, recrute,{ headers:headers});
}

//la method qui permet la supprission  d'un recrutement
deleteSelection(id: number) {
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('user');
    let headers = new HttpHeaders().set('X-Auth-Token',  token);
    // let options = new RequestOptions({ headers:headers});
    return this._httpClient.delete(this.url +"recrutes/" + id,{ headers:headers});
  }
getFirstEtat(): Observable<any> {
      let token = localStorage.getItem('token');
      let user = localStorage.getItem('user');
      let headers = new HttpHeaders().set('X-Auth-Token',  token);
      return this._httpClient.get(this.url+"etats/first/"+user,{ headers:headers});
  }

//filtrage tables
filterItems(searchTerm){
    let items = this.getRecrute();
    return items.filter((item) => {
        return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });    
}

getSearch(titre) {
  let token = localStorage.getItem('token');
  let user = localStorage.getItem('user');
  let headers = new HttpHeaders().set('X-Auth-Token',  token);
  // let options = new RequestOptions({ headers:headers});
  return this._httpClient.get(this.url+"recrutes/search/"+titre, { headers:headers});
}

//la method post pour Ajouter un processus de recrutement
postEmail(email: any) {
  let token = localStorage.getItem('token');
  let headers = new HttpHeaders().set('X-Auth-Token',  token);
  return this._httpClient.post(this.url+"recrutes/email", email,{ headers:headers});
}
}
