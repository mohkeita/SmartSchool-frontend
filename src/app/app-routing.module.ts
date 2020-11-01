import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EnseignantsComponent} from './enseignants/enseignants.component';
import {ElevesComponent} from './eleves/eleves.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProfilComponent} from './profil/profil.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'eleves', component: ElevesComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'enseignants', component: EnseignantsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
