import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { DataTableModule } from "angular2-datatable";

import { TutorRoutingModule } from './tutor.routing';
import { TutorComponent } from './tutor.component';


import { SimpleNotificationsModule } from 'angular2-notifications';
import { ChartsModule } from 'ng2-charts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2DragDropModule } from 'ng2-drag-drop';
import { LoadersCssModule } from 'angular2-loaders-css';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarModule } from 'ap-angular2-fullcalendar';
import { EventsService } from '../admin/_services/events.service';
import { LoaderComponent } from './loader/loader.component';
import { TutorsService } from '../admin/_services/tutors.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTableModule, 
    ChartsModule,
    SimpleNotificationsModule.forRoot(),  
    Ng2SearchPipeModule, 
    Ng2DragDropModule.forRoot(),
    LoadersCssModule,  
    CalendarModule, 
    TutorRoutingModule
  ],
  declarations: [
    TutorComponent, 
    DashboardComponent, LoaderComponent
  ],
  providers: [
    EventsService,
    TutorsService
  ]
})
export class TutorModule { }
