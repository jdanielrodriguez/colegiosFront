import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorComponent } from "./tutor.component";

const routes: Routes = [
  { path: '', component: TutorComponent, children: [
    { path: 'dashboard', component: TutorComponent },
    { path: 'charts', component: TutorComponent },
    { path: 'tables', component: TutorComponent },
    { path: 'files', component: TutorComponent }
  ]},
{ path: 'frutas', component: TutorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorRoutingModule { }
