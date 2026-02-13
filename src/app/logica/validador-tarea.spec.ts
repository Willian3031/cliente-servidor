import { ValidadorTarea } from './validador-tarea';

describe('ValidadorTarea', () => {

  let validador: ValidadorTarea;

  beforeEach(() => {
    validador = new ValidadorTarea();
  });

  it('debe retornar false si el título es menor a 3 caracteres', () => {

    // Arrange
    const titulo = 'ab';

    // Act
    const resultado = validador.tituloValido(titulo);

    // Assert
    expect(resultado).toBeFalse();

  });

});
