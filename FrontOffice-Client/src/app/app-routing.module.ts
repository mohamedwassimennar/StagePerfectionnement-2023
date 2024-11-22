import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { OffreComponent } from './offre/offre.component';
import { RegistreComponent } from './registre/registre.component';
import { MesReservationsComponent } from './mes-reservations/mes-reservations.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'offre',component:OffreComponent},
  {path:'registre',component:RegistreComponent},
  {path:'mes-reservations',component:MesReservationsComponent},
  {path:'about',component:AboutComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
