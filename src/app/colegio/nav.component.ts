import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user=localStorage.getItem('currentUser');
  firstname=localStorage.getItem('currentFirstName');
  lastname=localStorage.getItem('currentLastName');
  picture=localStorage.getItem('currentPicture');
  id=localStorage.getItem('currentId');
  type=localStorage.getItem('currentType');
  click:boolean
  constructor() { }

  ngOnInit() {
  }
  hideNav(){
    if(!this.click){
      $('#page-wrapper').css('margin-left','0px')
      $('.nicescroll').css('width','0px')
      $('#apple-admin').css('display','none')
      $('.top-left-part').css('width','70px')
      this.click = !this.click
    }else{
      $('#page-wrapper').css('margin-left','')
      $('.nicescroll').css('width','')
      $('#apple-admin').css('display','')
      $('.top-left-part').css('width','')
      this.click = !this.click
    }
    
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentEmail');
    localStorage.removeItem('currentFirstName');
    localStorage.removeItem('currentLastName');
    localStorage.removeItem('currentId');
    localStorage.removeItem('currentType');
    location.reload();
  }
}
