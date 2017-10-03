import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstudianteComponent } from "./estudiante.component";
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },    
  { path: '', component: EstudianteComponent, children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'cursos/:op', component: EstudianteComponent },
    { path: 'curso-alumnos/:id/:name', component: EstudianteComponent },
    { path: 'tareas/:id/:name', component: EstudianteComponent },
    { path: 'detalle-alumno/:id/:name', component: EstudianteComponent },
    { path: 'asistencia/:id/:name', component: EstudianteComponent },
    { path: 'files', component: EstudianteComponent }
  ]},
{ path: 'frutas', component: EstudianteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteRoutingModule { }
