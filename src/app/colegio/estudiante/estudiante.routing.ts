import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstudianteComponent } from "./estudiante.component";

const routes: Routes = [
  { path: '', component: EstudianteComponent, children: [
    { path: 'dashboard', component: EstudianteComponent },
    { path: 'charts', component: EstudianteComponent },
    { path: 'tables', component: EstudianteComponent },
    { path: 'files', component: EstudianteComponent }
  ]},
{ path: 'frutas', component: EstudianteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteRoutingModule { }
