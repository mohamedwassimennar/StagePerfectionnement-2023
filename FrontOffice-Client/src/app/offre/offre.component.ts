import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Offre } from 'src/Model/offre.model';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent {
  listOffre : Offre[]
  IsLoggedIn:Boolean
  messageCommande=""
  constructor(private service : CrudService, private router:Router) { }
  ngOnInit(): void {
    
    this.service.getOffre().subscribe(offre => {
      this.listOffre = offre
    })
    this.IsLoggedIn=this.service.isLoggedIn()
  }
  reserver(event:any)
  {
    this.messageCommande=`<div class="alert alert-primary" role="alert">
    Veuillez patienter ...
  </div>`
    console.log(event)
    let rq:any={}
    rq.idClient=Number(localStorage.getItem("idC")) 
    rq.idOffre=event.id
   
    console.log(rq,"what we senddddd")
    this.service.reserverFromApi(rq).subscribe((data:any)=>{
     this.router.navigate(['mes-reservations'])
    
      this.messageCommande=`<div class="alert alert-success" role="alert">
    Réservé avec succès
  </div>`
    }, err=>{
      this.messageCommande=`<div class="alert alert-warning" role="alert">
     Erreur, Veuillez réssayer !! 
    </div>`

    })
    setTimeout(() => {
      this.messageCommande=""
    }, 3000);
  }
}
