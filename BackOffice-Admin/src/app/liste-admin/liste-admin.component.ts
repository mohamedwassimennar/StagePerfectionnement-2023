import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../Model/Admin.Model';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-liste-admin',
  templateUrl: './liste-admin.component.html',
  styleUrls: ['./liste-admin.component.css']
})
export class ListeAdminComponent {
  listAdmins : Admin[]
  numberOfAdmins : number = 0 
  role: String
  constructor(private service : CrudService, private router:Router) { }

  onDeleteAdmin(admin : Admin) {
    if(confirm("Voulez vous supprimer ce administrateur ?")) {
     
      this.service.deleteAdmin(admin.id).subscribe(() => {
        this.router.navigate(['/listeAdmin']).then(() => {
          window.location.reload()
        })
      })
    }
  }

  
  ngOnInit(): void {
    
    this.service.getAdmins().subscribe(admins => {
      this.listAdmins = admins
     
      this.numberOfAdmins = admins.length
    
    })
    this.role=localStorage.getItem('role') as String;
  }
}
