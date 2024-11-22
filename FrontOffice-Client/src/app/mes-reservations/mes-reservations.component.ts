import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-mes-reservations',
  templateUrl: './mes-reservations.component.html',
  styleUrls: ['./mes-reservations.component.css']
})
export class MesReservationsComponent {
  listReservation:any=[]

  constructor(private service:CrudService , private toaster : NgToastService , private router : Router) { }
  
  ngOnInit(): void {
    this.service.getAllReservationbyClientId().subscribe((data:any)=>{
      console.log(data)
      this.listReservation=data;
    })
  }
}
