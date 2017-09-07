import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from "./admin.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CiclosComponent } from "./ciclos/ciclos.component";
import { CursosComponent } from "./cursos/cursos.component";
import { EstudiantesComponent } from "./estudiantes/estudiantes.component";
import { GradosComponent } from "./grados/grados.component";
import { JornadasComponent } from "./jornadas/jornadas.component";
import { MaestrosComponent } from "./maestros/maestros.component";
import { TutoresComponent } from "./tutores/tutores.component";
import { UsuariosComponent } from "./usuarios/usuarios.component";

import { AsignarEstudiantesTutoresComponent } from "./asignar-estudiantes-tutores/asignar-estudiantes-tutores.component";
import { AsignarCicloJornadaComponent } from "./asignar-ciclo-jornada/asignar-ciclo-jornada.component";
import { AsignarJornadaGradosComponent } from "./asignar-jornada-grados/asignar-jornada-grados.component";
import { AsignarGradoMateriasComponent } from "./asignar-grado-materias/asignar-grado-materias.component";
import { AsignarMateriaMaestrosComponent } from "./asignar-materia-maestros/asignar-materia-maestros.component";


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },  
  { path: '', component: AdminComponent, children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'ciclos', component: CiclosComponent },
    { path: 'cursos', component: CursosComponent },
    { path: 'estudiantes', component: EstudiantesComponent },
    { path: 'grados', component: GradosComponent },
    { path: 'jornadas', component: JornadasComponent },
    { path: 'maestros', component: MaestrosComponent },
    { path: 'tutores', component: TutoresComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'estudiantes-tutores', component: AsignarEstudiantesTutoresComponent },
    { path: 'ciclo-jornada', component: AsignarCicloJornadaComponent },
    { path: 'jornada-grados', component: AsignarJornadaGradosComponent },
    { path: 'grado-materias', component: AsignarGradoMateriasComponent },
    { path: 'materia-maestros', component: AsignarMateriaMaestrosComponent },
  ]},
{ path: 'frutas', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
