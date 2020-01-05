import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../../models/user/login.model';
import { Observable } from 'rxjs/observable';
/*
  Generated class for the SecuriteProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SecuriteProvider {

  private authtokensUrl = "http://localhost:8000/auth-tokens";
  private registerUrl = "http://localhost:8000/users";

  constructor(public http: HttpClient) {
    console.log('Hello SecuriteProvider Provider');
  }

// methode de register
postUser(user: any) {
    return this.http.post(this.registerUrl, user);
  }

// methode pour l'auth
public postToken (login) {
    return this.http.post(this.authtokensUrl, login);
    }
// methode pour la deconnexion
public deconnexion () {
  let idToken = localStorage.getItem('token_id');
  let token = localStorage.getItem('token');
  let user = localStorage.getItem('user');
  let headers = new HttpHeaders().set('X-Auth-Token',  token);
  return this.http.delete(this.authtokensUrl+"/"+idToken, { headers:headers});
      }
}
