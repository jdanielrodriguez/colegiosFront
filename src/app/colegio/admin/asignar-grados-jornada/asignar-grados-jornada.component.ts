import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { EstudiantesTutoresService } from "../_services/_asignaciones/estudiantes-tutores.service";
import { CyclesService } from "../_services/cycles.service";
import { StudyingDaysService } from "../_services/studying-days.service";
import { NotificationsService } from 'angular2-notifications';
@Component({
  selector: 'app-asignar-grados-jornada',
  templateUrl: './asignar-grados-jornada.component.html',
  styleUrls: ['./asignar-grados-jornada.component.css']
})
export class AsignarGradosJornadaComponent implements OnInit {
  Table:any
  selectedData:any[]
  droppedItemsId:any=[]
  childs:any[]
  childsId:any=[]
  droppedItems:any=[]
  parentCombo:any
  selectedParent:any
  constructor(
    private _service: NotificationsService,
    private route: ActivatedRoute,
    private router: Router,
    private mainService: EstudiantesTutoresService,
    private ChildsService: CyclesService,
    private ParentsService: StudyingDaysService
  ) { }
    ngOnInit() {
      this.cargarAll()
      this.ChildsService.getAll()
                        .then(response => {
                          this.childs = response
                          this.childs.forEach((item,index)=>{
                            this.childsId.push({"id":item.id});
                          })
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
      this.ParentsService.getAll()
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
      this.selectedParent=id
      this.mainService.getStudents(id)
                        .then(response => {
                          this.selectedData = response
                          this.selectedData.forEach((item,index)=>{
                            this.droppedItemsId.push({"id":item.id});
                          })
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
                          this.create('Ciclo Actualizado exitosamente')
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
      
    }
    delete2(id:string){
      this.mainService.delete(id)
                        .then(response => {
                          this.cargarAll()
                          console.clear 
                          this.create('Estudiantes Desasignados')
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
      
    }
    delete(formValue){
      this.mainService.deleteAll(formValue)
                        .then(response => {
                          this.cargarAll()
                          console.clear 
                          this.create('Estudiantes Desasignados')
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
      
    }
    insert(formValue:any){
      
          console.log(formValue);
          
    // if(this.selectedParent){      
    //   this.mainService.create(formValue)
    //                     .then(response => {
    //                       this.create('Estudiantes Asignados')
    //                     }).catch(error => {
    //                       console.clear     
    //                       this.createError(error) 
    //                     })
      
    //                   }else{
    //                     this.createError("Debe seleccionar un Tutor") 
    //                   }
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
