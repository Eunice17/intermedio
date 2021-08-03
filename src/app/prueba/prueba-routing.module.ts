import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPruebaComponent } from './dashboard-prueba/dashboard-prueba.component';
import { ProfilePruebaComponent } from './profile-prueba/profile-prueba.component';
import { PruebaComponent } from './prueba/prueba.component';

const routes: Routes = [
    { path:'', component: PruebaComponent,
    children: [
        { path:'', component: DashboardPruebaComponent },
        { path:'profile-imran', component: ProfilePruebaComponent }
    ] }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class pruebaRoutingModule { }