import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CrudService } from '../service/crud.service';
import { Client } from 'src/Model/client.model';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent {
  loginForm:FormGroup
  
  
  public msg!: string;
 
  constructor(private services : CrudService , private router : Router,private fb:FormBuilder, private toast:NgToastService) {
    let formControls = {
      nom: new FormControl('',[
        Validators.required,
        
      ]),
      prenom: new FormControl('',[
        Validators.required,
        
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.email,
       
      ]),
      mdp: new FormControl('',[
        Validators.required,
       
      ]),
      telephone: new FormControl('',[
        Validators.required,
       
      ]),

      address: new FormControl('',[
        Validators.required,
       
      ]),

    }
    
    this.loginForm = this.fb.group(formControls)
   }
   get nom() {
    return this.loginForm.get('nom');
  }
  get prenom() {
    return this.loginForm.get('prenom');
  }
  get email() {
    return this.loginForm.get('email');
  }
  get mdp() {
    return this.loginForm.get('mdp');
  }
  get telephone() {
    return this.loginForm.get('telephone');
  }
  get address() {
    return this.loginForm.get('address');
  }

  
   addNewClient() {
    let data = this.loginForm.value;
    console.log(data);
    let client = new Client(
     undefined, data.nom,data.prenom,data.email,data.mdp,data.telephone,data.address);
    console.log(client);
    
    if (
      data.nom == 0 ||
      data.prenom == 0 ||
      data.email == 0 ||
      data.mdp == 0 ||
      data.telephone== 0 ||
      data.address== 0
    ) {
      this.toast.info({
        detail: 'Error Message',
        summary: 'Remplir votre champs',
      });
    } else {
    this.services.addNewClient(client).subscribe(
      res=>{
        console.log(res);
        this.toast.success({
          detail: 'Succes Message',
          summary: 'Message est Envoyée',
        });
        
        this.router.navigate(['login']).then(() => {
          window.location.reload()
        });
      },
      err=>{
        console.log(err);
        this.toast.error({
          detail: 'Error Message',
          summary: 'Probléme de Serveur',
        }); }
    )

    }
  }

}
