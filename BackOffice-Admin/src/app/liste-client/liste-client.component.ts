import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Client } from '../Model/Client.Model';

@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.css']
})
export class ListeClientComponent {
  listClients : Client[]
  constructor(private service : CrudService, private router:Router) { }

  onDeleteClient(client : Client) {
    if(confirm("Voulez vous supprimer cet client ?")) {
     
      this.service.deleteClient(client.id).subscribe(() => {
        this.router.navigate(['/listeClient']).then(() => {
          window.location.reload()
        })
      })
    }
  }
  ngOnInit(): void {
    
    this.service.getClients().subscribe(clients => {
      this.listClients = clients

    })
  }
}
