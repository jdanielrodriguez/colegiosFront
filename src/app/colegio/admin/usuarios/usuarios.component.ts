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
  userTypesCombo:any
  foreignCombo:any
  foreignData:any
  selectedUser:any
  Data:any
  constructor(
    private _service: NotificationsService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsuariosService
  ) { }
  
    ngOnInit() {
      this.userService.getUsers()
                        .then(response => {
                          this.userTable = response
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
      this.userService.getUsersTypes()
                        .then(response => {
                          this.userTypesCombo = response
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
    }
    cargarUser(id:number){
      this.userService.getUser(id)
                        .then(response => {
                          this.selectedUser = response
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
    }
    updateUser(formValue:any){
      // this.userService.User(formValue)
      //                   .then(response => {
      //                     this.selectedUser = response
      //                   }).catch(error => {
      //                     console.clear     
      //                     this.createError(error) 
      //                   })
      let tutor:any = null
      let teacher:any = null
      let student:any = null

      switch (formValue.type) {
        case '1':{
          student=1
          break;
        }
        case '2':{
          teacher=1
          break;
        }
        case '3':{
          tutor=1
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
        firstname: formValue.firstname,
        lastname: formValue.lastname,
        type: formValue.type,
        student: student,
        teacher: teacher,
        tutor: tutor
      }
      console.log(data)
    }
    insertUser(formValue:any){
      let tutor:any = null
      let teacher:any = null
      let student:any = null

      switch (formValue.type) {
        case '1':{
          student=1
          break;
        }
        case '2':{
          teacher=1
          break;
        }
        case '3':{
          tutor=1
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
      this.userService.createUser(formValue)
                        .then(response => {
                          this.create()
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
      console.log(`${id} ${type}`)
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
          console.log(`${id} tipo`)
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
        default:{
          console.log(`${type} tipo`)
          break;
        }
      }
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
}
