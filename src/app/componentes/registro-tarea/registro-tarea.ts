import { Component, EventEmitter, Output } from '@angular/core';
import { Tarea } from '../../modelos/tarea.model';

@Component({
  selector: 'app-registro-tarea',
  templateUrl: './registro-tarea.html',
  styleUrls: ['./registro-tarea.css']
})
export class RegistroTareaComponent {

  // Este decorador permite enviar información al componente padre
  @Output() tareaRegistrada = new EventEmitter<Tarea>();

  titulo: string = '';
  descripcion: string = '';

  registrar(): void {

    // Validación básica para evitar campos vacíos
    if (!this.titulo || !this.descripcion) {
      return;
    }

    const nuevaTarea: Tarea = {
      titulo: this.titulo,
      descripcion: this.descripcion
    };

    // Emitimos la tarea al componente padre
    this.tareaRegistrada.emit(nuevaTarea);

    // Limpiamos los campos
    this.titulo = '';
    this.descripcion = '';
  }
}

