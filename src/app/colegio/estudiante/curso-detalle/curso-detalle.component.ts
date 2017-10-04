import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { CursoDetalleService } from "./../_services/curso-detalle.service";
import { NotificationsService } from 'angular2-notifications';
import { Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
import { path } from "../../../config.module";

@Component({
  selector: 'app-curso-detalle',
  templateUrl: './curso-detalle.component.html',
  styleUrls: ['./curso-detalle.component.css']
})
export class CursoDetalleComponent implements OnInit {
  @Input() id:any;
  @Input() name:any;
  selectedData:any
  Table:any
  title:string=""
  idSubject:any
  public rowsOnPage = 5;
  public search:any
  today:any
  date:any
  view:number=1;
  private basePath:string = path.path
  url:String
  
  constructor(
    private _service: NotificationsService,
    private route: ActivatedRoute,
    private location:Location,
    private router:Router,
    private mainService:CursoDetalleService
  ) { }

  ngOnInit() {
    let date = new Date();
    this.today = date.getFullYear()+'-'+(((date.getMonth()+1)<10)?'0'+(date.getMonth()+1):(date.getMonth()+1))+'-'+(((date.getDate())<10)?'0'+(date.getDate()):(date.getDate()))
    this.date = this.today
    this.route.params
    .switchMap((params: Params) => (params['name']))
    .subscribe(response => { 
                      this.title+=response
                  });
    this.route.params
    .switchMap((params: Params) => (params['id']))
    .subscribe(response => { 
                      this.idSubject=response
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
    cargarSingle(id:number,id2:number){
      this.mainService.getSingle(id,id2)
                        .then(response => {
                          this.selectedData = response;
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
    }
    cargarReporte(id:number,id2:number){
      this.url = `${this.basePath}/api/subjects/${id2}/students/${id}/report`
      
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
    childInsert(id:number,asiste:boolean){
      $('#Loading').css('display','block')
      $('#Loading').addClass('in')
      let formValue:any = {
        assistance : asiste,
        subject_student: id
      }
      // this.childService.create(formValue)
      //                   .then(response => {
      //                     console.clear 
      //                     this.create('Asistencia Ingresada')
      //                     $('#Loading').css('display','none')
      //                     $("#editModal .close").click();
      //                     $("#insertModal .close").click();
      //                     this.cargarAll()
      //                   }).catch(error => {
      //                     console.clear     
      //                     this.createError(error) 
      //                   })
      
      
    }
    childUpdate(id:number,asiste:boolean){
      $('#Loading').css('display','block')
      $('#Loading').addClass('in')
      let formValue:any = {
        assistance : asiste,
        id: id
      }
      // this.childService.update(formValue)
      //                   .then(response => {
      //                     console.clear 
      //                     this.create('Asistencia Ingresada')
      //                     $('#Loading').css('display','none')
      //                     $("#editModal .close").click();
      //                     $("#insertModal .close").click();
      //                   }).catch(error => {
      //                     console.clear     
      //                     this.createError(error) 
      //                   })
      
      
    }
    secondChildUpdate(id:number){
      $('#Loading').css('display','block')
      $('#Loading').addClass('in')
      let nota = $('#nota'+id).val()
      let formValue:any = {
        student_note : nota,
        id: id
      }
      // this.HChildService.update(formValue)
      //                   .then(response => {
      //                     console.clear 
      //                     this.create('Asistencia Ingresada')
      //                     $('#Loading').css('display','none')
      //                     $("#editModal .close").click();
      //                     $("#insertModal .close").click();
      //                   }).catch(error => {
      //                     console.clear     
      //                     this.createError(error) 
      //                   })
      
      
    }
    childsInsert(value:any){
      $('#Loading').css('display','block')
      $('#Loading').addClass('in')
      let formValue:any = {
        name : value.name,
        description : value.description,
        homework_note : value.homework_note,
        date_end : value.date_end,
        students_subjects: []
      }
      this.Table.forEach(element => {
        formValue.students_subjects.push(
          {id:element.id}
        )
      });
      
      // this.HChildService.createAll(formValue)
      //                   .then(response => {
      //                     console.clear 
      //                     this.create('Tarea Ingresada')
      //                     $('#Loading').css('display','none')
      //                     $("#editModal .close").click();
      //                     $("#insertModal .close").click();
      //                     this.cargarAll()
      //                   }).catch(error => {
      //                     console.clear     
      //                     this.createError(error) 
      //                   })
      
      
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
