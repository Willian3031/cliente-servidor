import { Component, EventEmitter, Output } from '@angular/core';
import { Tarea } from '../../modelos/tarea.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro-tarea',
  imports: [FormsModule],
  templateUrl: './registro-tarea.html',
  styleUrls: ['./registro-tarea.scss']
})
export class RegistroTarea {

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

