import { clase4Model } from './../models/clase4/clase4.model';
import { Inject, inject, Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Clase4Gateway } from '../models/clase4/gateway/clase4-gateway';
import { rolUsuarioModel } from '../models/rol-usuario/rol-usaurio.model';
import { audioModel } from '../models/audio/audio.model';
import { Clase2Gateway } from '../models/clase2/gateway/clase2-gateway';



@Injectable({
  providedIn: 'root'
})

export class GetClase2UseCases {

  constructor( private _clase2GateWay: Clase2Gateway ) {}

  getAllClase2 () : Observable <object> {
    return this._clase2GateWay.getAllClase2();
  }


}
