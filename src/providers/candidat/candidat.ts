import { Injectable } from '@angular/core';
import { Candidat } from '../../models/candidat/candidat.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User } from '../../models/user/user.model';

@Injectable()
export class CandidatProvider {

  readonly url = "http://localhost:8000/";
  constructor(private _httpClient: HttpClient) { }

//add
addCandidat(data) {
  return new Promise((resolve, reject) => {
    this._httpClient.post(this.url+'candidat', data).subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  
//la method post pour inserer des candidat
postCandidat(candidat: any) {
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('user');
    let headers = new HttpHeaders().set('X-Auth-Token',  token);
    // let options = new RequestOptions({ headers:headers});
    return this._httpClient.post(this.url+"candidats", candidat,{ headers:headers});
  }

//la method qui permet la recupuration des candidat
getCandidat(): Observable<any> {
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('user');
    let headers = new HttpHeaders().set('X-Auth-Token',  token);
    // let options = new RequestOptions({ headers:headers});
    return this._httpClient.get(this.url+"candidats/"+user,{ headers:headers});
  }

private extractData(res: Response) {
    let body = res;
    return body || {};
  }
  
private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
// la method pour modifier les donnee d'un candidat
updateCandidat(candidat: any) {
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('user');
    let headers = new HttpHeaders().set('X-Auth-Token',  token);
  return this._httpClient.put(this.url +"candidats/"+candidat.id, candidat,{ headers:headers});
}

//la method qui permet la supprission  d'un candidat
deleteCandidat(id: number) {
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('user');
    let headers = new HttpHeaders().set('X-Auth-Token',  token);
    // let options = new RequestOptions({ headers:headers});
    return this._httpClient.delete(this.url +"candidat/" + id,{ headers:headers});
  }

//filtrage
filterItems(searchTerm,items){
    return items.filter((item) => {
        return item.titre.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });    
}

getSearch(titre) {
  let token = localStorage.getItem('token');
  let user = localStorage.getItem('user');
  let headers = new HttpHeaders().set('X-Auth-Token',  token);
  // let options = new RequestOptions({ headers:headers});
    return this._httpClient.get(this.url+"candidats/search/"+titre, { headers:headers});
}

getOrder(cond) {
  let token = localStorage.getItem('token');
  let user = localStorage.getItem('user');
  let headers = new HttpHeaders().set('X-Auth-Token',  token);
    return this._httpClient.get(this.url+"candidats/tri/"+cond,{ headers:headers} );
}

//recherche parametré
getSearchParam(genre,titre,adr,netude,exp,comp) {
  let token = localStorage.getItem('token');
  let user = localStorage.getItem('user');
  let headers = new HttpHeaders().set('X-Auth-Token',  token);
    return this._httpClient.get(this.url+"candidats/search/"+genre+"/"+titre+"/"+adr+"/"+netude+"/"+exp+"/"+comp,{ headers:headers});

  }
// la method pour modifier une image
updateCandidatimage(file, id){
    var fd = new FormData();
    fd.append('photo_can', file);
    let headers :({
      'Content-Type': 'multipart/form-data'
  });
  this._httpClient.patch(this.url +"candidat/image/"+id, fd, {
    headers: {'Content-Type': 'multipart/form-data'}
}).map(
  res => res).subscribe((data) => console.log(data));
  
}

//la method qui permet la recupuration des villes
getVilles(): Observable<any> {
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('user');
    let headers = new HttpHeaders().set('X-Auth-Token',  token);
    // let options = new RequestOptions({ headers:headers});
      return this._httpClient.get(this.url+"villes",{ headers:headers});
     }

//la method qui permet la recupuration des specialite
getSpecialites(): Observable<any> {
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('user');
    let headers = new HttpHeaders().set('X-Auth-Token',  token);
    // let options = new RequestOptions({ headers:headers});
      return this._httpClient.get(this.url+"specialites",{ headers:headers});
     }
    
//la method qui permet la recupuration des titres
getTitres(): Observable<any> {
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('user');
    let headers = new HttpHeaders().set('X-Auth-Token',  token);
    // let options = new RequestOptions({ headers:headers});
      return this._httpClient.get(this.url+"titres",{ headers:headers});
     }

//la method qui permet la recupuration des experiences
getExperiences(): Observable<any> {
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('user');
    let headers = new HttpHeaders().set('X-Auth-Token',  token);
    // let options = new RequestOptions({ headers:headers});
      return this._httpClient.get(this.url+"experiences",{ headers:headers});
     }

//la method qui permet la recupuration des niveau d'etude
getNiveauEtude(): Observable<any> {
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('user');
    let headers = new HttpHeaders().set('X-Auth-Token',  token);
    // let options = new RequestOptions({ headers:headers});
      return this._httpClient.get(this.url+"niveauEtude",{ headers:headers});
     }

updateImage(id, image){
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('user');
    let headers = new HttpHeaders().set('X-Auth-Token',  token);
       return this._httpClient.put(this.url+"image/"+id,image,{ headers:headers})
     }

//la method qui permet la recupuration des niveau d'etude
getAllCandidat() {
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('user');
    let headers = new HttpHeaders().set('X-Auth-Token',  token);
    // let options = new RequestOptions({ headers:headers});
      return this._httpClient.get(this.url+"candidats",{ headers:headers});
     }

//la method post pour inserer des villes
postVille(ville: any) {
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('user');
    let headers = new HttpHeaders().set('X-Auth-Token',  token);
    // let options = new RequestOptions({ headers:headers});
    return this._httpClient.post(this.url+"villes", ville,{ headers:headers});
}

//la method post pour inserer des experiences
postExperience(experience: any) {
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('user');
    let headers = new HttpHeaders().set('X-Auth-Token',  token);
    // let options = new RequestOptions({ headers:headers});
    return this._httpClient.post(this.url+"experiences", experience,{ headers:headers});
}

//la method post pour inserer des specilaites
postSpecilaite(specialite: any) {
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('user');
    let headers = new HttpHeaders().set('X-Auth-Token',  token);
    // let options = new RequestOptions({ headers:headers});
    return this._httpClient.post(this.url+"specialites", specialite,{ headers:headers});
}

//la method post pour inserer des niveaux-etudes
postNiveauetude(niveauetude: any) {
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('user');
    let headers = new HttpHeaders().set('X-Auth-Token',  token);
    // let options = new RequestOptions({ headers:headers});
    return this._httpClient.post(this.url+"niveauetude", niveauetude,{ headers:headers});
}

//la method post pour inserer des Titres
postTitres(titre: any) {
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('user');
    let headers = new HttpHeaders().set('X-Auth-Token',  token);
    // let options = new RequestOptions({ headers:headers});
    return this._httpClient.post(this.url+"titres", titre,{ headers:headers});
}
}