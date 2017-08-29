import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColegioRoutingModule } from './colegio.routing';
import { NavComponent } from './nav.component';

@NgModule({
  imports: [
    CommonModule,
    ColegioRoutingModule
  ],
  declarations: [NavComponent]
})
export class ColegioModule { }
