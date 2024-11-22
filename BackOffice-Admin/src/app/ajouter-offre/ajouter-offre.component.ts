import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Admin } from '../Model/Admin.Model';
import { CrudService } from '../service/crud.service';
import { Offre } from '../Model/Offre.Model';

@Component({
  selector: 'app-ajouter-offre',
  templateUrl: './ajouter-offre.component.html',
  styleUrls: ['./ajouter-offre.component.css']
})
export class AjouterOffreComponent {
  loginForm:FormGroup
  
  
  public message!: string;
  userFile: any;
  imagePath: any;
  imgURL: any;
 
  constructor(private services : CrudService , private router : Router,private fb:FormBuilder, private toast:NgToastService) {
    let formControls = {
      nom: new FormControl('',[
        Validators.required,
        
      ]),
      image: new FormControl('',[
        Validators.required,
       
      ]),
      prix: new FormControl('',[
        Validators.required,
       
      ]),
      datededebut: new FormControl('',[
        Validators.required,
       
      ]),
      datedefin: new FormControl('',[
        Validators.required,
       
      ]),

    }
    
    this.loginForm = this.fb.group(formControls)
   }
   get nom() {
    return this.loginForm.get('nom');
  }
  get image() {
    return this.loginForm.get('image');
  }
  get prix() {
    return this.loginForm.get('prix');
  }
  get datededebut() {
    return this.loginForm.get('datededebut');
  }

  get datedefin() {
    return this.loginForm.get('datedefin');
  }

  
   addNewOffre() {
    let data = this.loginForm.value;
    console.log(data);
    let offre = new Offre(
     undefined, data.nom,this.imgURL,data.prix,data.datededebut,data.datedefin);
    console.log(offre);
    
    if (
      data.nom == 0 ||
      this.imgURL == 0 ||
      data.prix == 0 ||
      data.datededebut == 0 ||
      data.datedefin == 0
    ) {
      this.toast.info({
        detail: 'Error Message',
        summary: 'Remplir votre champs',
      });
    } else {
    this.services.addNewOffre(offre).subscribe(
      res=>{
        console.log(res);
        this.toast.success({
          detail: 'Succes Message',
          summary: 'Message est Envoyée',
        });
        
        this.router.navigate(['/liste-offre']).then(() => {
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
  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFile = file;
  

      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = 'Only images are supported.';
        return;
      }

      var reader = new FileReader();

      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      }
    }
  }
}
