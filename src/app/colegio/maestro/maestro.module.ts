import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaestroRoutingModule } from './maestro.routing';
import { MaestroComponent } from './maestro.component';

@NgModule({
  imports: [
    CommonModule,
    MaestroRoutingModule
  ],
  declarations: [MaestroComponent]
})
export class MaestroModule { }
