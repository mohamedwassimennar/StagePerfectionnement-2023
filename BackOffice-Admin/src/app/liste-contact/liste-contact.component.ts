import { Component } from '@angular/core';
import { Contact } from '../Model/Contact.Model';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-liste-contact',
  templateUrl: './liste-contact.component.html',
  styleUrls: ['./liste-contact.component.css']
})
export class ListeContactComponent {
  listContacts : Contact[]

  constructor(private service : CrudService, private router:Router) { }

  onDeleteContact(contact : Contact) {
    if(confirm("Voulez vous supprimer ce contact ?")) {
     
      this.service.deleteContact(contact.id).subscribe(() => {
        this.router.navigate(['/liste-contact']).then(() => {
          window.location.reload()
        })
      })
    }
  }

  
  ngOnInit(): void {
    
    this.service.getContacts().subscribe(contacts => {
      this.listContacts = contacts
    
    })
  }
}
