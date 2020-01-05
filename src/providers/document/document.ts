import { Injectable } from '@angular/core';
import { Document } from '../../models/document/document.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User } from '../../models/user/user.model';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class DocumentProvider {

  readonly url = "http://localhost:8000/";
 
  constructor(private _httpClient: HttpClient) { }

//la method post pour inserer des documents
postDocument(document:any) {
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('user');
    let headers = new HttpHeaders().set('X-Auth-Token',  token);
    // let options = new RequestOptions({ headers:headers});
    return this._httpClient.post(this.url+'document', document, {headers:headers});
  }

//la method qui permet la recupuration des documents
getDocument(): Observable<any> {
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('user');
    let headers = new HttpHeaders().set('X-Auth-Token',  token);
    // let options = new RequestOptions({ headers:headers});
    return this._httpClient.get(this.url+"documents/"+ user,{headers:headers});
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
    } else { errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

// la method pour modifier les donnee d'un document
updateDocument(document: any){
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('user');
    let headers = new HttpHeaders().set('X-Auth-Token',  token);
    // let options = new RequestOptions({ headers:headers});
    return this._httpClient.put(this.url +"document/"+ document.id, document,{headers:headers}) ;
      }

//la method qui permet la supprission  d'un document
deletedocument(id: number) {
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('user');
    let headers = new HttpHeaders().set('X-Auth-Token',  token);
    // let options = new RequestOptions({ headers:headers});
    return this._httpClient.delete(this.url +"document/" + id, {headers:headers});
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
  return this._httpClient.get(this.url+"documents/search/"+titre, { headers:headers});
}
}
