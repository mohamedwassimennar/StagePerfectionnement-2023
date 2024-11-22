import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../Model/Admin.Model';
import { Offre } from '../Model/Offre.Model';
import { Client } from '../Model/Client.Model';
import { Contact } from '../Model/Contact.Model';
import { JwtHelperService } from '@auth0/angular-jwt';
const httpOptions ={
  headers: new HttpHeaders ({'Content-Type': 'application/json'}) 
}
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  helper=new JwtHelperService
  getReservations() {
    throw new Error('Method not implemented.');
  }
  apiUrl = "http://localhost:8081/api"
  loginUserUrl="http://localhost:8081/api/admin/login"
  constructor(private http : HttpClient) { }
  getAdmins(): Observable<Admin[]>{
    return this.http.get<Admin[]>(this.apiUrl + "/admin");
  }
deleteAdmin(id : number){
    const url = `${this.apiUrl+"/admin"}/${id}`
    return this.http.delete(url , httpOptions)
  }
  addNewAdmin(admin:Admin){
    return this.http.post<any>(this.apiUrl+"/admin", admin);
  }
  loginAdmin(admin:Admin){
    return this.http.post<any>(this.loginUserUrl, admin);
  }
  isLoggedIn(){

    let token = localStorage.getItem("myToken");

    if (token) {
      return true ;
    } else {
      return false;
    }
  }
  deleteOffre(id : number){
    const url = `${this.apiUrl+"/offre"}/${id}`
    return this.http.delete(url , httpOptions)
  }
  getOffres(): Observable<Offre[]>{
    return this.http.get<Offre[]>(this.apiUrl + "/offre");
  }
  deleteClient(id : number){
    const url = `${this.apiUrl+"/client"}/${id}`
    return this.http.delete(url , httpOptions)
  }
  getClients(): Observable<Client[]>{
    return this.http.get<Client[]>(this.apiUrl + "/client");
  }
  deleteContact(id : number){
    const url = `${this.apiUrl+"/contact"}/${id}`
    return this.http.delete(url , httpOptions)
  }
  getContacts(): Observable<Contact[]>{
    return this.http.get<Contact[]>(this.apiUrl + "/contact");
  }
  addNewOffre(offre:Offre){
    return this.http.post<any>(this.apiUrl+"/offre", offre);
  }
  userDetails(){
    let token:any=localStorage.getItem('myToken');
    let decodeToken= this.helper.decodeToken(token);
     return decodeToken.data;
   }
}
