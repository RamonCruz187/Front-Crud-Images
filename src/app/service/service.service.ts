import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<any> {
     console.log("elservicio funciona"); 
    return this.http.get('http://191.96.251.43:8095/ver');

  }

  nuevaImagen(url: string, FormData:any): Observable<any> {
    return this.http.post(url, FormData);
  }
  
}
