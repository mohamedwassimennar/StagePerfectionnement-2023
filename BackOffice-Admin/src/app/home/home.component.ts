import { Component } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Client } from '../Model/Client.Model';
import { Offre } from '../Model/Offre.Model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  totalAdmins : number = 0
  totalClients : number = 0
  totalOffres : number = 0
  totalReservations : number = 0
  constructor(private service : CrudService) { }
  
    ngOnInit(): void {
      this.service.getAdmins().subscribe(admin =>{
        this.totalAdmins=admin.length})
  this.service.getClients().subscribe(client =>{
    this.totalClients=client.length})
    this.service.getOffres().subscribe(offre =>{
      this.totalOffres=offre.length})
    }
}
