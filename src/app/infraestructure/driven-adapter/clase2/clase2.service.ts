import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clase2Model } from '../../../domain/models/clase2/clase2.model';
import { Clase2Gateway } from '../../../domain/models/clase2/gateway/clase2-gateway';
import { clase2respuestaModel } from '../../../domain/models/clase2/clase2respuesta.model';

@Injectable({
  providedIn: 'root'
})
export class Clase2Service extends Clase2Gateway{

  private url = environment.api

  constructor(private http: HttpClient) { super();}

  override getAllClase2(): Observable<Array<Clase2Model>> {
    return this.http.get<Clase2Model[]>(`${this.url}/MostrarActividad1`)
  }

  override saveClase2(clase2: clase2respuestaModel): Observable<Object> {
    return this.http.post(`${this.url}/InsertarRespuestasClaseActividad1`,clase2)
  }

  override saveClase2reg(clase2: Clase2Model): Observable<Object> {
    return this.http.post(`${this.url}/InsertarActividad1`,clase2)
  }
}
