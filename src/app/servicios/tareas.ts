import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarea } from '../modelos/tarea.model';

@Injectable({
  providedIn: 'root',
})
export class Tareas {

  // URL base del backend
  private apiUrl = 'http://localhost:3000/api/tareas';

  // Inyectamos HttpClient para realizar solicitudes HTTP
  constructor(private http: HttpClient) {}

  // Obtener todas las tareas
  obtenerTareas(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.apiUrl);
  }

  // Registrar nueva tarea
  registrarTarea(tarea: Tarea): Observable<any> {
    return this.http.post(this.apiUrl, tarea);
  }
}
