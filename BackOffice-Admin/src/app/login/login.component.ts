import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Admin } from '../Model/Admin.Model';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup
  constructor(
    private fb: FormBuilder,
    private service:CrudService,
    private router:Router,private toast:NgToastService
  ) { 
    let formControls = {
      email: new FormControl('',[
        Validators.required,
        Validators.email
        
      ]),
      motdepasse: new FormControl('',[
        Validators.required,
       
      ])
    }

    this.loginForm = this.fb.group(formControls)
  }

  get email() { return this.loginForm.get('email') }
  get motdepasse() { return this.loginForm.get('motdepasse') }
  ngOnInit(): void {  let isLoggedIn = this.service.isLoggedIn();
    

    if (isLoggedIn) {
      this.router.navigate(['']);
    } 
  }

  login() {
    let data = this.loginForm.value;
    console.log(data);
    let admin = new Admin(
     null, null,null,data.email,data.motdepasse,null);
    console.log(admin);
    if (
  
      data.email == 0 ||
      data.motdepasse == 0
    )
    {
      this.toast.info({
        detail: 'Error Message',
        summary: 'Remplir votre champs',
      });
    } else {
  
      this.service.loginAdmin(admin).subscribe(
        res=>{
          console.log(res);
          let token = res.token;
          localStorage.setItem("myToken",res.token);
          localStorage.setItem("role",res.role);
          this.router.navigate(['home']).then(()=>{
            window.location.reload();
          });
        },
        err=>{
          console.log(err);
          this.toast.error({
            detail: 'Error Message',
            summary: 'Probléme de Serveur',
          });
          
        }
      )
      
    }
    }

}
