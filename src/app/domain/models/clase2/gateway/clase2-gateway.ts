import { audioModel } from '../../audio/audio.model';
import { Observable } from "rxjs";
import { Clase2Model } from '../clase2.model';
import { clase2respuestaModel } from '../clase2respuesta.model';

export abstract class Clase2Gateway {
  abstract getAllClase2(): Observable<Clase2Model[]>;
  abstract saveClase2(clase4: clase2respuestaModel): Observable<Object>;
  abstract saveClase2reg(clase4: Clase2Model): Observable<Object>;
}
