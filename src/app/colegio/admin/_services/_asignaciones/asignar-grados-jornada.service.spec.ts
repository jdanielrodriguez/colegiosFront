import { TestBed, inject } from '@angular/core/testing';

import { AsignarGradosJornadaService } from './asignar-grados-jornada.service';

describe('AsignarGradosJornadaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsignarGradosJornadaService]
    });
  });

  it('should be created', inject([AsignarGradosJornadaService], (service: AsignarGradosJornadaService) => {
    expect(service).toBeTruthy();
  }));
});
