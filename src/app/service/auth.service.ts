import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }


  login(userLogin: UserLogin): Observable<UserLogin>{
     return this.http.post<UserLogin>('https://h-api-ava.tindin.com.br/auth', userLogin)
  }

  logged(){
    let ok = false

    if(environment.email != ''){
      ok = true
    }


    return ok
  }

}
