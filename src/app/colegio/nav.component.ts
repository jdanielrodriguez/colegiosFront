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
  id=localStorage.getItem('currentId');
  type=localStorage.getItem('currentType');
  constructor() { }

  ngOnInit() {
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
