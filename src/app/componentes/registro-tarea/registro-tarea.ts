import { Component, EventEmitter, Output } from '@angular/core';
import { Tarea } from '../../modelos/tarea.model';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro-tarea',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro-tarea.html',
  styleUrls: ['./registro-tarea.scss']
})
export class RegistroTarea {

  // Este decorador permite enviar información al componente padre
  @Output() tareaRegistrada = new EventEmitter<Tarea>();

  // Definimos el formulario reactivo
  formulario: any;

  // Creamos el construtor para inyectar el formulario reactivo
  constructor(private fb: FormBuilder) {

  // Se crea el formulario reactivo utilizando FormBuilder
  this.formulario = this.fb.group({
    titulo: ['', [Validators.required, Validators.minLength(3)]],
    descripcion: ['', [Validators.required, Validators.minLength(5)]],
    fechaLimite: ['', Validators.required],
    prioridad: ['media', Validators.required],
    estado: ['pendiente', Validators.required]
  });
}


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

