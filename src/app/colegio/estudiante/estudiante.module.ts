import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { DataTablesModule } from 'angular-datatables';

import { EstudianteRoutingModule } from './estudiante.routing';
import { EstudianteComponent } from './estudiante.component';

import { SimpleNotificationsModule } from 'angular2-notifications';
import { ChartsModule } from 'ng2-charts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2DragDropModule } from 'ng2-drag-drop';
import { LoadersCssModule } from 'angular2-loaders-css';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTablesModule, 
    ChartsModule,
    SimpleNotificationsModule.forRoot(),  
    Ng2SearchPipeModule, 
    Ng2DragDropModule.forRoot(),
    LoadersCssModule, 
    EstudianteRoutingModule
  ],
  declarations: [EstudianteComponent]
})
export class EstudianteModule { }
