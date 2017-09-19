import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaestroComponent } from "./maestro.component";
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },    
  { path: '', component: MaestroComponent, children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'charts', component: MaestroComponent },
    { path: 'tables', component: MaestroComponent },
    { path: 'files', component: MaestroComponent }
  ]},
{ path: 'frutas', component: MaestroComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaestroRoutingModule { }
