import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MarcaInterface } from '../models/marca';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor(private http: HttpClient) {
   }

   findAll(): Observable<MarcaInterface[]>{
    return this.http.get<MarcaInterface[]>(`${API_CONFIG.baseUrl}/Marca`)
   }
}
