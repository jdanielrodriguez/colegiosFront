import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { CursoAlumnosService } from "./../_services/curso-alumnos.service";
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-curso-alumnos',
  templateUrl: './curso-alumnos.component.html',
  styleUrls: ['./curso-alumnos.component.css']
})
export class CursoAlumnosComponent implements OnInit {
  @Input() id:any;
  selectedData:any
  constructor(
    private route: ActivatedRoute,
    private location:Location,
    private router:Router,
    private mainService:CursoAlumnosService
  ) { }

  ngOnInit() {
    this.route.params
            .switchMap((params: Params) => this.mainService.getSingle(+params['id']))
            .subscribe(response => { 
                this.selectedData = response
            });
  }

  goBack(): void {
    this.location.back();
}
}
