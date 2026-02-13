import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTarea } from './registro-tarea';

describe('RegistroTarea', () => {
  let component: RegistroTarea;
  let fixture: ComponentFixture<RegistroTarea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroTarea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroTarea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
