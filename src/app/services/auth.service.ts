import { Injectable } from '@angular/core';
import { Credenciais } from '../models/credenciais';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { MessageResponse } from '../models/message';
import { API_CONFIG } from '../config/api.config';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtService: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient, private storageService: StorageService) { }


  authenticate(creds: Credenciais):   Observable<MessageResponse>{

    return this.http.post<MessageResponse>(`${API_CONFIG.baseUrl}/Login`, creds)
  }

   successfulLogin(authToken: string){

   this.storageService.setData('token', authToken)
   }

   isAuthenticated(){
   let token = this.storageService.getData('token');

     if(token != null){
      return !this.jwtService.isTokenExpired(token)
    }
     return false
  }

}
