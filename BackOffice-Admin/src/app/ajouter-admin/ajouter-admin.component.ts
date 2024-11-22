import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../Model/Admin.Model';
import { CrudService } from '../service/crud.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-ajouter-admin',
  templateUrl: './ajouter-admin.component.html',
  styleUrls: ['./ajouter-admin.component.css']
})
export class AjouterAdminComponent {
  loginForm:FormGroup
  
  
  public message!: string;
 
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
      motdepasse: new FormControl('',[
        Validators.required,
       
      ]),
      role: new FormControl('',[
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
  get motdepasse() {
    return this.loginForm.get('motdepasse');
  }

  get role() {
    return this.loginForm.get('role');
  }

  
   addNewAdmin() {
    let data = this.loginForm.value;
    console.log(data);
    let admin = new Admin(
     undefined, data.nom,data.prenom,data.email,data.motdepasse,data.role);
    console.log(admin);
    
    if (
      data.nom == 0 ||
      data.prenom == 0 ||
      data.email == 0 ||
      data.motdepasse == 0 ||
      data.role == 0
    ) {
      this.toast.info({
        detail: 'Error Message',
        summary: 'Remplir votre champs',
      });
    } else {
    this.services.addNewAdmin(admin).subscribe(
      res=>{
        console.log(res);
        this.toast.success({
          detail: 'Succes Message',
          summary: 'Message est Envoyée',
        });
        
        this.router.navigate(['/listeAdmin']).then(() => {
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
