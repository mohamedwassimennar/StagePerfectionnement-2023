import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  IsLoggedIn:Boolean
  constructor(private service : CrudService, private router:Router) { }
  ngOnInit(): void {
    

    this.IsLoggedIn=this.service.isLoggedIn()
  }
  logout(){
    console.log("logout");
    localStorage.clear()
    this.router.navigate(['/']).then(()=>{
      window.location.reload()
    }) ;
  }
}