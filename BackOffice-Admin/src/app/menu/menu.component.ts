import { Component } from '@angular/core';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  role:String
constructor(private service:CrudService){
}
ngOnInit():void{
  this.role=localStorage.getItem('role') as String;
}
}
