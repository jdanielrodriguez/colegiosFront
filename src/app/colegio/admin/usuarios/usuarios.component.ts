import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private _service: NotificationsService) { }
  
    ngOnInit() {
      
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
