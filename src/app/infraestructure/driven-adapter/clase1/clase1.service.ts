import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clase1Model } from '../../../domain/models/clase1/clase.modul';


@Injectable({
  providedIn: 'root'
})
export class Clase1Service {

  private url = environment.api
  constructor(private http: HttpClient) { }

  listAudios(): Observable<Clase1Model[]>{
    return this.http.get<Clase1Model[]>(`${this.url}/MostrarClase1`)
  }

  registrarAudios(audios: Clase1Model): Observable<object>{
    return this.http.post(`${this.url}/InsertarClase1`, audios)
  }
}
