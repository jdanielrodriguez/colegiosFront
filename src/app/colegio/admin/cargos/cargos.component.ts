import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { ChargesService } from "../_services/charges.service";
import { NotificationsService } from 'angular2-notifications';

declare var $: any

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css']
})
export class CargosComponent implements OnInit {
  Table:any
  selectedData:any
  Date:any
  public rowsOnPage = 5;
  public search:any
  constructor(
    private _service: NotificationsService,
    private route: ActivatedRoute,
    private router: Router,
    private mainService: ChargesService
  ) { }
  
    ngOnInit() {
      let date = new Date();
      let month = date.getMonth()+1;
      let month2;
      let day;
      if(month<10){
        month2='0'+month;
      }else{
        month2=month
      }

      if(date.getDate()<10){
        day='0'+date.getDate();
      }else{
        day=date.getDate()
      }
      this.Date= date.getFullYear()+'-'+month2+'-'+day;
      this.cargarAll()
    }
    cargarAll(){
      this.mainService.getAll()
                        .then(response => {
                          this.Table = response
                          $("#editModal .close").click();
                          $("#insertModal .close").click();
                          console.clear 
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
    }
    cargarSingle(id:number,option:string){
      this.mainService.getSingle(id,option)
                        .then(response => {
                          this.selectedData = response;
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
    }
    update(id:any,state:any){
      $('#Loading').css('display','block')
      $('#Loading').addClass('in')
      //console.log(data)
      let formValue = {
        id:id,
        state:state
      }
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
                          $('#insert-form')[0].reset()
                          
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
      
      
    }

    insertSingle(formValue:any){
      let data:any = {
        tuition : 0,
        inscription : 0,
        charge_limit : formValue.charge_limit,
        quantity : formValue.quantity,
        increase : formValue.increase,
        description : formValue.description,
        idinscription : this.selectedData.id
      }
      
      $('#Loading').css('display','block')
      $('#Loading').addClass('in')
      this.mainService.create(data)
                        .then(response => {
                          $('#insertSingleModal').modal('hide')
                          $('#insert-single-form')[0].reset()
                          this.cargarSingle(data.idinscription,"?option=porpagar")
                          console.clear 
                          this.create('Cargo Ingresado')
                          $('#Loading').css('display','none')
                          
                          
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
      
      
    }
    cerrar(id:string){
      $('#'+id).modal('hide')
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
