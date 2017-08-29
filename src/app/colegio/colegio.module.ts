import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColegioRoutingModule } from './colegio.routing';
import { NavComponent } from './nav.component';

import { StudentGuard } from "./../_guards/student.guard";
import { TutorGuard } from "./../_guards/tutor.guard";
import { TeacherGuard } from "./../_guards/teacher.guard";

@NgModule({
  imports: [
    CommonModule,
    ColegioRoutingModule
  ],
  declarations: [NavComponent],
  providers: [
    StudentGuard,
    TutorGuard,
    TeacherGuard
  ]
})
export class ColegioModule { }
