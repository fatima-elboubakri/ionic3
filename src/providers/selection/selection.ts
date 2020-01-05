import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Selection} from '../../models/selection/selection.model';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';

@Injectable()
export class SelectionProvider {
        
readonly url = "http://localhost:8000/";

constructor(public _httpClient: HttpClient) {
        console.log('Hello AnalyseProvider Provider');
}
// récupération des nbr des personnes ayant été convoqué pour chacune des étapes du processus de recrutement
//url("filtrePr/{id_etat}")
getCountPerByEtat(id: number){
        let token = localStorage.getItem('token');
        let user = localStorage.getItem('user');
        let headers = new HttpHeaders().set('X-Auth-Token', token);
        return this._httpClient.get(this.url+"filtrePr/" + id, {headers:headers}).pipe(
                        map(this.extractData),
                        catchError(this.handleError)
        );
}

// récuperation des nbr de personnes pour chaque ètat par apport aux années 
//("filtreA/{id}")
getCountEtat(){
        let token = localStorage.getItem('token');
        let user = localStorage.getItem('user');
        let headers = new HttpHeaders().set('X-Auth-Token', token);
        return this._httpClient.get(this.url+"filtreA/"+user, {headers:headers}).pipe(
                 map(this.extractData),
                 catchError(this.handleError)
        );
        }

// Serving content
getEtapeData(numero:number) {
        return this.getCountPerByEtat(numero)
}

// récupération des nbr des personnes ayant été retenues
//url("filtrePrRetenu/{id}")
getCountPerByEtatRetenu():Observable<any>{
        let token = localStorage.getItem('token');
        let user = localStorage.getItem('user');
        let headers = new HttpHeaders().set('X-Auth-Token', token);
        return this._httpClient.get(this.url+"filtrePrRetenu/"+user, {headers:headers}).pipe(
                        map(this.extractData),
                        catchError(this.handleError)
        );
}

// récupération des nbr de femme ayant été convoquée pour chacunes des étapes du processus de recrutement
//url("filtreAF/{id}")
getCountFemmeEtat(){
        let token = localStorage.getItem('token');
        let user = localStorage.getItem('user');
        let headers = new HttpHeaders().set('X-Auth-Token', token);
        return this._httpClient.get(this.url+"filtreAF/"+user,{headers:headers}).pipe(
                map(this.extractData),
                catchError(this.handleError)
        );
}

// récupération des nbr des personnes dans une spécialité donnée
//url("filtrePrS/{id}")
getCountPerSpecialite(){
        let token = localStorage.getItem('token');
        let user = localStorage.getItem('user');
        let headers = new HttpHeaders().set('X-Auth-Token', token);
        return this._httpClient.get(this.url+"filtrePrS/"+user,{headers:headers}).pipe(
                map(this.extractData),
                catchError(this.handleError)
        );
}

// récupération des nbr de femme dans une spécialité donnée
//url("filtrePrFS/{id}")
getCountFemmeSpecialite(){
        let token = localStorage.getItem('token');
        let user = localStorage.getItem('user');

        let headers = new HttpHeaders().set('X-Auth-Token', token);
        return this._httpClient.get(this.url+"filtrePrFS/"+user, {headers:headers}).pipe(
                map(this.extractData),
                catchError(this.handleError)
        );
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
}