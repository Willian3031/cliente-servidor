import { Component } from '@angular/core';
import { Tarea } from '../../modelos/tarea.model';
import { RegistroTarea } from "../../componentes/registro-tarea/registro-tarea";
import { ListadoTareas } from "../../componentes/listado-tareas/listado-tareas";

@Component({
  selector: 'app-gestion-tareas',
  imports: [RegistroTarea, ListadoTareas],
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
