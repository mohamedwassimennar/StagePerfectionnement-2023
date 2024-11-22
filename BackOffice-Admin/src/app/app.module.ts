import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterAdminComponent } from './ajouter-admin/ajouter-admin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { ListeAdminComponent } from './liste-admin/liste-admin.component';
import { AjouterOffreComponent } from './ajouter-offre/ajouter-offre.component';
import { ListeOffreComponent } from './liste-offre/liste-offre.component';
import { ListeClientComponent } from './liste-client/liste-client.component';
import { ListeReservationComponent } from './liste-reservation/liste-reservation.component';
import { ListeContactComponent } from './liste-contact/liste-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AjouterAdminComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ListeAdminComponent,
    AjouterOffreComponent,
    ListeOffreComponent,
    ListeClientComponent,
    ListeReservationComponent,
    ListeContactComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
