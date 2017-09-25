import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { CursoAlumnosService } from "./../_services/curso-alumnos.service";
import { NotificationsService } from 'angular2-notifications';
import { Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-curso-alumnos',
  templateUrl: './curso-alumnos.component.html',
  styleUrls: ['./curso-alumnos.component.css']
})
export class CursoAlumnosComponent implements OnInit {
  @Input() id:any;
  @Input() name:any;
  selectedData:any
  Table:any
  title:string=""
  public rowsOnPage = 5;
  public search:any
  constructor(
    private _service: NotificationsService,
    private route: ActivatedRoute,
    private location:Location,
    private router:Router,
    private mainService:CursoAlumnosService
  ) { }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => (params['name']))
    .subscribe(response => { 
                      this.title+=response
                  });
   
    this.cargarAll()
  }
charge(name:string):void{
  this.title=name;
}
  goBack(): void {
    this.location.back();
  }
  cargarAll(){
      this.route.params
                  .switchMap((params: Params) => this.mainService.getAll(+params['id']))
                  .subscribe(response => { 
                      this.Table = response
                                      $("#editModal .close").click();
                                      $("#insertModal .close").click();
                                      console.clear 
                  });
      
    }
    cargarSingle(id:number){
      this.mainService.getSingle(id)
                        .then(response => {
                          this.selectedData = response;
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
    }
    update(formValue:any){
      $('#Loading').css('display','block')
      $('#Loading').addClass('in')
      //console.log(data)
      this.mainService.update(formValue)
                        .then(response => {
                          this.cargarAll()
                          console.clear 
                          this.create('Estudiante Actualizado exitosamente')
                          $('#Loading').css('display','none')
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
      
    }
    delete(id:string){
      $('#Loading').css('display','block')
      $('#Loading').addClass('in')
      this.mainService.delete(id)
                        .then(response => {
                          this.cargarAll()
                          console.clear 
                          this.create('Estudiante Eliminado exitosamente')
                          $('#Loading').css('display','none')
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
      
    }
    insert(formValue:any){
      $('#Loading').css('display','block')
      $('#Loading').addClass('in')
      this.mainService.create(formValue)
                        .then(response => {
                          this.cargarAll()
                          console.clear 
                          this.create('Estudiante Ingresado')
                          $('#Loading').css('display','none')
                          
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
      
      
    }
  public options = {
               position: ["bottom", "right"],
               timeOut: 2000,
               lastOnBottom: false,
               animate: "fromLeft",  
               showProgressBar: false,
               pauseOnHover: true,
               clickToClose: true,
               maxLength: 200
           };
  
    create(success) {
                this._service.success('¡Éxito!',success)

    }
    createError(error) {
                this._service.error('¡Error!',error)

    }
}
