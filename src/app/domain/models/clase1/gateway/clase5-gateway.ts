import { Clase1Model } from '../clase.modul';
import { clase4Model } from './../../clase4/clase4.model';
import { Observable } from "rxjs";

export abstract class clase1Gateway {
  abstract getAllAudio(): Observable<Clase1Model>;
  // abstract newTipoDocumento(tipoDocumento: tipoDocumentosModel): Observable<Object>;
  // abstract getById(id: number): Observable<tipoDocumentosModel>;
  // abstract updateTipoDocumento(id: number, tipoDocumento: tipoDocumentosModel): Observable<Object>;
}
