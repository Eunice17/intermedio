import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPruebaComponent } from './dashboard-prueba/dashboard-prueba.component';
import { ProfilePruebaComponent } from './profile-prueba/profile-prueba.component';
import { PruebaComponent } from './prueba/prueba.component';
import { pruebaRoutingModule } from './prueba-routing.module';

@NgModule({
  declarations: [
    PruebaComponent,
    DashboardPruebaComponent,
    ProfilePruebaComponent
  ],
  imports: [
    CommonModule,
    pruebaRoutingModule
  ]
})
export class PruebaModule { }
