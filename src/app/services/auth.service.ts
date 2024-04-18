import { Injectable } from '@angular/core';
import { Credenciais } from '../models/credenciais';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

interface MessageResponse{
  data: TokenResponse,
  status: number,
  title: string,
  message: string,
  validationErrors: string
}

interface TokenResponse{
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtService: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:5286/Login'

  authenticate(creds: Credenciais):   Observable<MessageResponse>{

    return this.http.post<MessageResponse>(this.url, creds)
  }

  // successfulLogin(authToken: string){
  //   localStorage.setItem('token', authToken);
  // }

  // isAuthenticated(){
  //   let token = localStorage.getItem('token')

  //   if(token != null){
  //     return !this.jwtService.isTokenExpired(token)
  //   }
  //   return false
  // }

}
