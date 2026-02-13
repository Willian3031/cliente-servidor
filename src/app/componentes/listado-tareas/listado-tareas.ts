import { Component, Input } from '@angular/core';
import { Tarea } from '../../modelos/tarea.model';

@Component({
  selector: 'app-listado-tareas',
  imports: [],
  templateUrl: './listado-tareas.html',
  styleUrl: './listado-tareas.scss',
})
export class ListadoTareas {

  // Recibe las tareas desde el componente padre
  @Input() tareas: Tarea[] = [];
}
