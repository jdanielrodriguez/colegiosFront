import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { UsuariosService } from "../_services/usuarios.service";
import { NotificationsService } from 'angular2-notifications';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  userTable:any
  userTypesCombo:any
  foreignCombo:any
  foreignData:any
  selectedUser:any
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject<any>();
  Data:any
  constructor(
    private _service: NotificationsService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsuariosService
  ) { }
  
    ngOnInit() {
      this.dtOptions = {
        pagingType: 'full_numbers',
        language: {
          emptyTable: 'Tabla limpia',
          info: 'Mostrando página _PAGE_ de _PAGES_',
          infoEmpty: 'No hay registros disponibles',
          infoFiltered: '(filtrado de _MAX_ registros totales)',
          zeroRecords: 'Nada para mostrar, lo sentimos',
          search: 'Buscar',
          lengthMenu: 'Mostranto _MENU_ registro por página',
          paginate: {
            first: 'Primero',
            last: 'Ultimo',
            next: 'Siguiente',
            previous: 'Anterior'
          }
  
        }
      };
      this.cargarUsers()
      this.userService.getTypes()
                        .then(response => {
                          this.userTypesCombo = response
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
    }
    cargarUsers(){
      this.dtTrigger = new Subject<any>();
      this.userService.getAll()
                        .then(response => {
                          this.userTable = response
                          this.dtTrigger.next()                          
                          $("#editModal .close").click();
                          $("#insertModal .close").click();
                          console.clear 
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
    }
    cargarUser(id:number){
      this.userService.getSingle(id)
                        .then(response => {
                          this.selectedUser = response;
                          this.cargarForanea(response.type+'');
                          switch (response.type+'') {
                            case '1':{
                              this.selectedUser.foreign=response.student
                              break;
                          }
                            case '2':{
                              this.selectedUser.foreign=response.teacher
                              break;
                          }
                            case '3':{
                              this.selectedUser.foreign=response.tutor
                              break;
                          }
                            default:{
                              break;}
                          }
                          if(this.selectedUser.foreign){
                            this.getForeign(this.selectedUser.foreign+'',response.type+'')
                          }
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
    }
    updateUser(formValue:any){
      $('#Loading').css('display','block')
      $('#Loading').addClass('in')
      let tutor:any = null
      let teacher:any = null
      let student:any = null
      switch (formValue.type) {
        case '1':{
          student=this.selectedUser.foreign*1
          break;
        }
        case '2':{
          teacher=this.selectedUser.foreign*1
          break;
        }
        case '3':{
          tutor=this.selectedUser.foreign*1
          break;
        }
        case 1:{
          student=this.selectedUser.foreign*1
          break;
        }
        case 2:{
          teacher=this.selectedUser.foreign*1
          break;
        }
        case 3:{
          tutor=this.selectedUser.foreign*1
          break;
        }
        default:{
          break;
        }
      }
      
      
      let data = {
        id: formValue.id,
        username: formValue.username,
        email: formValue.email,
        firstname: formValue.firstname?formValue.firstname:'',
        lastname: formValue.lastname?formValue.lastname:'',
        type: formValue.type,
        student: student,
        teacher: teacher,
        tutor: tutor
      }
      //console.log(data)
      this.userService.update(data)
                        .then(response => {
                          this.cargarUsers()
                          console.clear 
                          this.create('Usuario Actualizado exitosamente')
                          $('#Loading').css('display','none')
      
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
      
    }
    deleteUser(id:string){
      $('#Loading').css('display','block')
      $('#Loading').addClass('in')
      this.userService.delete(id)
                        .then(response => {
                          this.cargarUsers()
                          console.clear 
                          this.create('Usuario Eliminado exitosamente')
                          $('#Loading').css('display','none')
                          
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
      
    }
    insertUser(formValue:any){
      $('#Loading').css('display','block')
      $('#Loading').addClass('in')
      let tutor:any = null
      let teacher:any = null
      let student:any = null
      
      switch (formValue.type) {
        case '1':{
          if(formValue.foreign=='null'){
            formValue.foreign=null
          }else{
            student=formValue.foreign*1
          }
          break;
        }
        case '2':{
          if(formValue.foreign=='null'){
            formValue.foreign=null
          }else{
            teacher=formValue.foreign*1
          }
          break;
        }
        case '3':{
          if(formValue.foreign=='null'){
            formValue.foreign=null
          }else{
            tutor=formValue.foreign*1
          }
          break;
        }
        case 1:{
          if(formValue.foreign=='null'){
            formValue.foreign=null
          }else{
            student=formValue.foreign*1
          }
          break;
        }
        case 2:{
          if(formValue.foreign=='null'){
            formValue.foreign=null
          }else{
            teacher=formValue.foreign*1
          }
          break;
        }
        case 3:{
          if(formValue.foreign=='null'){
            formValue.foreign=null
          }else{
            tutor=formValue.foreign*1
          }
          break;
        }
        default:{
          break;
        }
      }
      let pass = this.generar(20)
      let data = {
        username: formValue.username,
        email: formValue.email,
        firstname: formValue.firstname,
        lastname: formValue.lastname,
        type: formValue.type,
        student: student,
        teacher: teacher,
        password: pass,
        tutor: tutor
      }
      console.log(data)
      this.userService.create(data)
                        .then(response => {
                          this.cargarUsers()
                          console.clear 
                          this.create('Usuario Ingresado')
                          $('#Loading').css('display','none')
                          
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
      
      
    }
    generar(longitud)
    {
      let i:number
      var caracteres = "123456789+/-*abcdefghijkmnpqrtuvwxyz123456789+/-*ABCDEFGHIJKLMNPQRTUVWXYZ12346789+/-*";
      var contraseña = "";
      for (i=0; i<longitud; i++) contraseña += caracteres.charAt(Math.floor(Math.random()*caracteres.length));
      return contraseña;
    }
    comboTutor(id:string){
      this.userService.getTutor(id)
                        .then(response => {
                          this.Data = {
                            lastnameData:response.lastname,
                            firstnameData:response.firstname
                          }
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
    }
    comboTeacher(id:string){
      this.userService.getTeacher(id)
                        .then(response => {
                          this.Data = {
                            lastnameData:response.lastname,
                            firstnameData:response.firstname
                          }
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
    }
    comboStudent(id:string){
      this.userService.getStudent(id)
                        .then(response => {
                          this.Data = {
                            lastnameData:response.lastname,
                            firstnameData:response.firstname
                          }
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
    }
    getForeign(id:string,type:string){
      //console.log(`${id} ${type}`)
      switch (type) {
        case '1':{
          this.comboStudent(id)
          break;
        }
        case '2':{
          this.comboTeacher(id)
          break;
        }
        case '3':{
          this.comboTutor(id)
          break;
        }
        default:{
          console.log(`${id} id
          ${type} tipo`)
          break;
        }
      }
    }
    comboTutors(type:string){
      this.userService.getTutors()
                        .then(response => {
                          this.foreignCombo = response
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
    }
    comboTeachers(type:string){
      this.userService.getTeachers()
                        .then(response => {
                          this.foreignCombo = response
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
    }
    comboStudents(type:string){
      this.userService.getStudents()
                        .then(response => {
                          this.foreignCombo = response
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
    }
    cargarForanea(type:string){
      
      switch (type) {
        case '1':{
          this.comboStudents(type)
          this.foreignData = {
            title:'Alumnos',
            type: type
          };
          break;
        }
        case '2':{
          this.comboTeachers(type)
          this.foreignData = {
            title:'Maestros',
            type: type
          };
          break;
        }
        case '3':{
          this.comboTutors(type)
          this.foreignData = {
            title:'Tutores',
            type: type
          };
          break;
        }
        case '4':{
          this.foreignData = {
            title:'',
            type: type
          };
          break;
        }
        default:{
          this.foreignData = {
            title:'',
            type: type
          };
          console.log(`combo foraneo no encontrado ${type} tipo`)
          break;
        }
      }
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
