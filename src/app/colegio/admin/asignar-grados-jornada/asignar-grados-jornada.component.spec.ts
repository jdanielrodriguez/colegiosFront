import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarGradosJornadaComponent } from './asignar-grados-jornada.component';

describe('AsignarGradosJornadaComponent', () => {
  let component: AsignarGradosJornadaComponent;
  let fixture: ComponentFixture<AsignarGradosJornadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarGradosJornadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarGradosJornadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
