import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { CiclosJornadaService } from "../_services/_asignaciones/ciclos-jornada.service";
import { CyclesService } from "../_services/cycles.service";
import { StudyingDaysService } from "../_services/studying-days.service";
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-asignar-ciclo-jornada',
  templateUrl: './asignar-ciclo-jornada.component.html',
  styleUrls: ['./asignar-ciclo-jornada.component.css']
})
export class AsignarCicloJornadaComponent implements OnInit {
  Table:any
  selectedData:any[]
  childs:any[]
  parentCombo:any
  beginDate:any
  endDate:any
  constructor(
    private _service: NotificationsService,
    private route: ActivatedRoute,
    private router: Router,
    private mainService: CiclosJornadaService,
    private ChildsService: CyclesService,
    private ParentsService: StudyingDaysService
  ) { }
    ngOnInit() {
      let date = new Date();
      let month = date.getMonth()+1;
      let month2;
      if(month<10){
        month2='0'+month;
      }else{
        month2=month
      }
      this.beginDate= date.getFullYear()+'-'+month2+'-01'
      month = date.getMonth()+2;
      if(month<10){
        month2='0'+month;
      }else{
        month2=month;
      }
      this.endDate=date.getFullYear()+'-'+month2+'-01'
      
      this.cargarAll()
      this.ChildsService.getAll()
                        .then(response => {
                          this.childs = response
                          
                          console.clear 
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
      this.ParentsService.getAll()
                        .then(response => {
                          this.parentCombo = response
                          
                          console.clear 
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
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
                          this.selectedData = response
                          console.clear 
                                                    
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
                          this.create('Master Actualizado')
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
                          this.create('Master Borrado')
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
                          this.create('Master Ingresado')
                          
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
