import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-prueba',
  templateUrl: './profile-prueba.component.html',
  styleUrls: ['./profile-prueba.component.scss']
})
export class ProfilePruebaComponent implements OnInit {

  nCards: Array<any>= [1,2,3,4,5,6];
  constructor() { }

  ngOnInit(): void {
  }

}
