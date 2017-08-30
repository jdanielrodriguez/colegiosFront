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

import { SimpleNotificationsModule } from 'angular2-notifications';
import { ChartsModule } from 'ng2-charts';

import { UsuariosService } from "./_services/usuarios.service";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTablesModule, 
    ChartsModule,
    SimpleNotificationsModule.forRoot(),     
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
    TutoresComponent
  ],
  providers: [
    UsuariosService
  ]
})
export class AdminModule { }
