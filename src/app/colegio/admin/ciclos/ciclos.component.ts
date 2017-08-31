import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { CyclesService } from "../_services/cycles.service";
import { NotificationsService } from 'angular2-notifications';
@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.css']
})
export class CiclosComponent implements OnInit {
  Table:any
  selectedData:any
  constructor(
    private _service: NotificationsService,
    private route: ActivatedRoute,
    private router: Router,
    private mainService: CyclesService
  ) { }
  
    ngOnInit() {
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
      
      //console.log(data)
      this.mainService.update(formValue)
                        .then(response => {
                          this.cargarAll()
                          console.clear 
                          this.create('Ciclo Actualizado exitosamente')
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
      
    }
    delete(id:string){
      this.mainService.delete(id)
                        .then(response => {
                          this.cargarAll()
                          console.clear 
                          this.create('Ciclo Eliminado exitosamente')
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
      
    }
    insert(formValue:any){
      
      this.mainService.create(formValue)
                        .then(response => {
                          this.cargarAll()
                          console.clear 
                          this.create('Ciclo Ingresado')
                          
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
