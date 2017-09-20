import { Component, OnInit } from '@angular/core';

import { CursosService } from "../_services/cursos.service";
import { NotificationsService } from 'angular2-notifications';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  Table:any
  selectedData:any
  Id:any = localStorage.getItem('currentId');
  constructor(
    private _service: NotificationsService,
    private mainService: CursosService
  ) { }
  
    ngOnInit() {
      this.cargarAll()
    }
    cargarAll(){
      this.mainService.getAll(this.Id)
                        .then(response => {
                          this.Table = response
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
