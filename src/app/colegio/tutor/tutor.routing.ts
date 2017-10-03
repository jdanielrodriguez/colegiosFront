import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorComponent } from "./tutor.component";
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },    
  { path: '', component: TutorComponent, children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'cursos/:op', component: TutorComponent },
    { path: 'curso-alumnos/:id/:name', component: TutorComponent },
    { path: 'tareas/:id/:name', component: TutorComponent },
    { path: 'detalle-alumno/:id/:name', component: TutorComponent },
    { path: 'asistencia/:id/:name', component: TutorComponent },
    { path: 'files', component: TutorComponent }
  ]},
{ path: 'frutas', component: TutorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorRoutingModule { }
