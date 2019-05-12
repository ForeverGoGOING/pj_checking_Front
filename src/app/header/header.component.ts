import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  uid:string;
  constructor() {}

  ngOnInit() {
    this.uid= localStorage.getItem("uid")
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('uid');
    this.uid = undefined;
  }
}
