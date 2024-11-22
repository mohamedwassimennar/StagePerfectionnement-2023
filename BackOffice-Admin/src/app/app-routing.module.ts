import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterAdminComponent } from './ajouter-admin/ajouter-admin.component';
import { ListeAdminComponent } from './liste-admin/liste-admin.component';
import { AjouterOffreComponent } from './ajouter-offre/ajouter-offre.component';
import { ListeOffreComponent } from './liste-offre/liste-offre.component';
import { ListeClientComponent } from './liste-client/liste-client.component';
import { ListeReservationComponent } from './liste-reservation/liste-reservation.component';
import { ListeContactComponent } from './liste-contact/liste-contact.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'ajouterAdmin',component:AjouterAdminComponent},
  {path:'listeAdmin',component:ListeAdminComponent},
  {path:'ajouter-offre',component:AjouterOffreComponent},
  {path:'liste-offre',component:ListeOffreComponent},
  {path:'liste-client',component:ListeClientComponent},
  {path:'liste-reservation',component:ListeReservationComponent},
  {path:'liste-contact',component:ListeContactComponent},
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
