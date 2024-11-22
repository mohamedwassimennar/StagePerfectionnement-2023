import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CrudService } from '../service/crud.service';
import { Contact } from 'src/Model/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  loginForm:FormGroup
  
  
  public msg!: string;
 
  constructor(private services : CrudService , private router : Router,private fb:FormBuilder, private toast:NgToastService) {
    let formControls = {
      nomprenom: new FormControl('',[
        Validators.required,
        
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.email,
       
      ]),
      telephone: new FormControl('',[
        Validators.required,
       
      ]),
      sujet: new FormControl('',[
        Validators.required,
       
      ]),
      message: new FormControl('',[
        Validators.required,
       
      ]),

    }
    
    this.loginForm = this.fb.group(formControls)
   }
   get nom() {
    return this.loginForm.get('nomprenom');
  }
  get email() {
    return this.loginForm.get('email');
  }
  get telephone() {
    return this.loginForm.get('telephone');
  }

  get sujet() {
    return this.loginForm.get('sujet');
  }
  get message() {
    return this.loginForm.get('message');
  }

  
   addNewContact() {
    let data = this.loginForm.value;
    console.log(data);
    let contact = new Contact(
     undefined, data.nomprenom,data.email,data.telephone,data.sujet,data.message);
    console.log(contact);
    
    if (
      data.nomprenom == 0 ||
      data.email == 0 ||
      data.telephone == 0 ||
      data.sujet== 0 ||
      data.message== 0
    ) {
      this.toast.info({
        detail: 'Error Message',
        summary: 'Remplir votre champs',
      });
    } else {
    this.services.addNewContact(contact).subscribe(
      res=>{
        console.log(res);
        this.toast.success({
          detail: 'Succes Message',
          summary: 'Message est Envoyée',
        });
        
        this.router.navigate(['']).then(() => {
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
