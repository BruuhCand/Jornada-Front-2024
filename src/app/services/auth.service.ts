import { Injectable } from '@angular/core';
import { Credenciais } from '../models/credenciais';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { MessageResponse } from '../models/message';
import { API_CONFIG } from '../config/api.config';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtService: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) { }


  authenticate(creds: Credenciais):   Observable<MessageResponse>{

    return this.http.post<MessageResponse>(`${API_CONFIG.baseUrl}/Login`, creds)
  }

   successfulLogin(authToken: string){
    sessionStorage.setItem('token', authToken)
   }

   isAuthenticated(){
    try{
      let token = sessionStorage.getItem ('token');

      if(token != null){
       return !this.jwtService.isTokenExpired(token)
     }
      return false
    }catch(error){
      console.log(error)
      return false
    }
  
  }

  logout(){
    sessionStorage.clear()
  }

  getRole(): string{
    const token = sessionStorage.getItem('token');

    return this.jwtService.decodeToken(token)
  }

}
