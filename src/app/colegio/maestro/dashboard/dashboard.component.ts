import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  date = new Date();
  calendarOptions:Object = {
    fixedWeekCount : false,
    defaultDate: this.date.getFullYear()+'-'+(this.date.getMonth()+1)+'-'+this.date.getDay(),
    editable: false,
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles',
    'Jueves', 'Viernes', 'Sabado'],
    dayNamesShort:['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
    'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
    'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    firstDay: 1,
    weekends: false,
    eventLimit: true, // allow "more" link when too many events
    events: [
      {
        title: 'All Day Event',
        start: '2017-09-01',
        end:'',
        rendering: 'background'
      },
      {
        title: 'Long Event',
        start: '2016-09-07',
        end: '2016-09-10'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2016-09-09T16:00:00'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2016-09-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2016-09-11',
        end: '2016-09-13'
      },
      {
        title: 'Meeting',
        start: '2016-09-12T10:30:00',
        end: '2016-09-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2016-09-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2016-09-12T14:30:00'
      },
      {
        title: 'Happy Hour',
        start: '2016-09-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: '2016-09-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: '2016-09-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2016-09-28'
      }
    ]
  };
  constructor() { }

  ngOnInit() {
  }
}
