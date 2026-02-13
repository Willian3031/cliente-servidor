import { Component } from '@angular/core';
import { Tarea } from '../../modelos/tarea.model';

@Component({
  selector: 'app-gestion-tareas',
  imports: [],
  templateUrl: './gestion-tareas.html',
  styleUrl: './gestion-tareas.scss',
})
export class GestionTareas {

  // Arreglo que almacena las tareas registradas
  listaTareas: Tarea[] = [];

  // Método que recibe la tarea emitida por el componente hijo
  agregarTarea(tarea: Tarea): void {
    this.listaTareas.push(tarea);
  }
}
