import { Component, EventEmitter, Output } from '@angular/core';
import { Tarea } from '../../modelos/tarea.model';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Tareas } from '../../servicios/tareas';

@Component({
  selector: 'app-registro-tarea',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro-tarea.html',
  styleUrls: ['./registro-tarea.scss']
})
export class RegistroTarea {

  // Este decorador permite enviar información al componente padre
  @Output() tareaRegistrada = new EventEmitter<Tarea>();

  // Definimos el formulario reactivo
  formulario: any;

  // Creamos el construtor para inyectar el formulario reactivo
  constructor(private fb: FormBuilder, private tareasService: Tareas) {

  // Se crea el formulario reactivo utilizando FormBuilder
  this.formulario = this.fb.group({
    titulo: ['', [Validators.required, Validators.minLength(3)]],
    descripcion: ['', [Validators.required, Validators.minLength(5)]],
    fechaLimite: ['', Validators.required],
    prioridad: ['media', Validators.required],
    estado: ['pendiente', Validators.required]
  });
}

  // Método para registrar la tarea
  registrar(): void {

  if (this.formulario.invalid) {
    this.formulario.markAllAsTouched();
    return;
  }

  // Creamos un objeto tarea a partir de los valores del formulario
  const nuevaTarea = this.formulario.value as Tarea;

  this.tareasService.registrarTarea(nuevaTarea)
    .subscribe({
      next: (respuesta) => {

        // Emitimos la tarea guardada (la que viene del backend)
        this.tareaRegistrada.emit(respuesta.tarea);

        // Reiniciamos formulario
        this.formulario.reset({
          prioridad: 'media',
          estado: 'pendiente'
        });

      },
      error: (error) => {
        console.error('Error al guardar:', error);
      }
    });
  }
}

