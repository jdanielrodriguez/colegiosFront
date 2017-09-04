import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { DataTablesModule } from 'angular-datatables';

import { AdminRoutingModule } from './admin.routing';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CiclosComponent } from './ciclos/ciclos.component';
import { JornadasComponent } from './jornadas/jornadas.component';
import { MaestrosComponent } from './maestros/maestros.component';
import { GradosComponent } from './grados/grados.component';
import { CursosComponent } from './cursos/cursos.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { TutoresComponent } from './tutores/tutores.component';
import { AsignarEstudiantesTutoresComponent } from './asignar-estudiantes-tutores/asignar-estudiantes-tutores.component';


import { SimpleNotificationsModule } from 'angular2-notifications';
import { ChartsModule } from 'ng2-charts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { UsuariosService } from "./_services/usuarios.service";
import { CyclesService } from "./_services/cycles.service";
import { StudyingDaysService } from "./_services/studying-days.service";
import { GradesService } from "./_services/grades.service";
import { StudentsService } from "./_services/students.service";
import { SubjectsService } from "./_services/subjects.service";
import { TeachersService } from "./_services/teachers.service";
import { TutorsService } from "./_services/tutors.service";
import { EstudiantesTutoresService } from "./_services/_asignaciones/estudiantes-tutores.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTablesModule, 
    ChartsModule,
    SimpleNotificationsModule.forRoot(),  
    Ng2SearchPipeModule,   
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent, 
    DashboardComponent, 
    UsuariosComponent, 
    CiclosComponent, 
    JornadasComponent, 
    MaestrosComponent, 
    GradosComponent, 
    CursosComponent, 
    EstudiantesComponent, 
    TutoresComponent, 
    AsignarEstudiantesTutoresComponent, 
  ],
  providers: [
    UsuariosService,
    CyclesService,
    StudyingDaysService,
    GradesService,
    StudentsService,
    SubjectsService,
    TeachersService,
    TutorsService,
    EstudiantesTutoresService
  ]
})
export class AdminModule { }
