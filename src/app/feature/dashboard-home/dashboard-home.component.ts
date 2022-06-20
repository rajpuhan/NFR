import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {
  userName!: any;
  userId!: any;
  phone!: any;
  status!: any;
  constructor() { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('username');
    this.userId = localStorage.getItem('userid');
    this.phone = localStorage.getItem('phone');
    this.status = localStorage.getItem('status');
  }

}
