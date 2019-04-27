import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Visita} from '../interfaces/visita';
@Injectable({
  providedIn: 'root'
})
export class RegistrosService {
  API_ENDPOINT = 'http://localhost/examen/public/api';
  constructor(private httpClient: HttpClient) { }
  get() {
    return this.httpClient.get(this.API_ENDPOINT + '/visitantes');
  }
  save(visitas:Visita){
    const headers = new HttpHeaders( {'Content-Type':'application/json'} );
    return this.httpClient.post(this.API_ENDPOINT+'/visitantes', visitas, {headers:headers});
  }
  put(visitas){
    const headers = new HttpHeaders( {'Content-Type':'application/json'} );
    return this.httpClient.put(this.API_ENDPOINT+'/visitantes/' + visitas.id, visitas, {headers:headers});
  }
  delete(id) {
    return this.httpClient.delete(this.API_ENDPOINT + '/visitantes/' + id);
  }
}
