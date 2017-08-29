import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { UsuariosService } from "../_services/usuarios.service";
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  userTable:any
  selectedUser:any
  constructor(
    private _service: NotificationsService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsuariosService
  ) { }
  
    ngOnInit() {
      this.userService.UsersTable()
      .then(response => {
        this.userTable = response
      }).catch(error => {
        console.clear     
        this.createError(error) 
      })
    }
    cargarUser(id:number){
      this.userService.User(id)
                        .then(response => {
                          this.selectedUser = response
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
    }
  public options = {
               position: ["bottom", "right"],
               timeOut: 4000,
               lastOnBottom: false,
               animate: "fromLeft",  
               showProgressBar: false,
               pauseOnHover: true,
               clickToClose: true,
               maxLength: 200
           };
  
      create() {
                  this._service.success('¡Éxito!','Su solicitud fue completada.')
  
      }
      createError(error) {
                  this._service.error('¡Error!',error)
  
      }
      arrow = 'fa-chevron-down'
  seleccion(){
    if(document.getElementById('Forms').className!='collapse text-left ulhover' && document.getElementById('Forms').className!='text-left ulhover collapse')
      {
        this.arrow = 'fa-chevron-down'
      }else{
        this.arrow = 'fa-chevron-up'
      }
  }
}
