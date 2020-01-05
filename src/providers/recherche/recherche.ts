import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/catch';
@Injectable()
export class RechercheProvider {

urlPub =/*"https://www.googleapis.com/customsearch/v1?key=AIzaSyCtYDYedySqc3VyEOsU2LyqC6l67MANF98&cx=005036102548016141645:pczfojlrwum&alt=json&q=";*/
"https://www.googleapis.com/customsearch/v1?key=AIzaSyDIqD1UL4RD03sY3FScnU_pYHYjscY7Lu0&cx=005036102548016141645:pczfojlrwum&q=";

readonly url = "http://localhost:8000/";

constructor(public http: HttpClient) {
console.log('Hello SourcingProvider Provider');
}

//la method qui permet la recupuration des candidat
getSearchgoogle(data): Observable<any> {
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('user');
    let headers = new HttpHeaders().set('X-Auth-Token', token);
    // let options = new RequestOptions({ headers:headers});
    return this.http.post(this.url+"searchgoogle",data,{ headers:headers});
}
}