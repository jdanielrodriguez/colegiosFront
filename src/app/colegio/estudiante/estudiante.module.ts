import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudianteRoutingModule } from './estudiante.routing';
import { EstudianteComponent } from './estudiante.component';

@NgModule({
  imports: [
    CommonModule,
    EstudianteRoutingModule
  ],
  declarations: [EstudianteComponent]
})
export class EstudianteModule { }
