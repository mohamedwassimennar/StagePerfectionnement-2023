import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Offre } from '../Model/Offre.Model';

@Component({
  selector: 'app-liste-offre',
  templateUrl: './liste-offre.component.html',
  styleUrls: ['./liste-offre.component.css']
})
export class ListeOffreComponent {
  listOffre : Offre[]
  constructor(private service : CrudService, private router:Router) { }

  onDeleteOffre(offre : Offre) {
    if(confirm("Voulez vous supprimer cet offre ?")) {
     
      this.service.deleteOffre(offre.id).subscribe(() => {
        this.router.navigate(['/listeOffre']).then(() => {
          window.location.reload()
        })
      })
    }
  }
  ngOnInit(): void {
    
    this.service.getOffres().subscribe(offre => {
      this.listOffre = offre
    })
  } 
}
