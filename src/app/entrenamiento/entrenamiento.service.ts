import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment'
import { Entrenamiento, EntrenamientoRutina } from './entrenamiento';

@Injectable({
  providedIn: 'root'
})
export class EntrenamientoService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  darEntrenamientos(idPersona: number): Observable<Entrenamiento[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    })
    return this.http.get<Entrenamiento[]>(`${this.apiUrl}/entrenamientos/${idPersona}`, { headers: headers })
  }
  darEntrenamientosRutina(idPersona: number): Observable<EntrenamientoRutina[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    })
    return this.http.get<EntrenamientoRutina[]>(`${this.apiUrl}/rutinasEntrenamientoPersona/${idPersona}`, { headers: headers })
  }

  darEntrenamiento(id: number): Observable<Entrenamiento> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    })
    return this.http.get<Entrenamiento>(`${this.apiUrl}/entrenamiento/${id}`, { headers: headers })
  }

  crearEntrenamiento(entrenamiento: Entrenamiento, idPersona: number): Observable<Entrenamiento> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
    return this.http.post<Entrenamiento>(`${this.apiUrl}/entrenamientos/${idPersona}`, entrenamiento, { headers: headers })
  }

  crearEntrenRutina(entrenamiento: any, idPersona: number): Observable<Entrenamiento> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
    //Fix API
    return this.http.post<Entrenamiento>(`${this.apiUrl}/rutinasEntrenamiento`, entrenamiento, { headers: headers })
  }

  editarEntrenamiento(entrenamiento: Entrenamiento): Observable<Entrenamiento> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
    return this.http.put<Entrenamiento>(`${this.apiUrl}/entrenamiento/${entrenamiento.id}`, entrenamiento, { headers: headers })
  }

  eliminarEntrenamiento(idEntrenamiento: number): Observable<Entrenamiento> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
    return this.http.delete<Entrenamiento>(`${this.apiUrl}/entrenamiento/${idEntrenamiento}`, { headers: headers })
  }

}
