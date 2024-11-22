import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Contact } from '../Model/Contact.Model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userDetails : any
  totalContacts : number = 0
  listContacts :Contact[] 
  constructor(private service: CrudService,private router:Router) { 
    this.userDetails = this.service.userDetails();
  }
 

  ngOnInit(): void {
    console.log(this.userDetails);
    this.service.getContacts().subscribe(contact =>{
      this.totalContacts=contact.length})
      this.service.getContacts().subscribe(contacts => {
        this.listContacts = contacts
      })
  }
logout(){
  console.log("logout");
  localStorage.clear()
  this.router.navigate(['/']).then(()=>{
    window.location.reload()
  }) ;
}
}
