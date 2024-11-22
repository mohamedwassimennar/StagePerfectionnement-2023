import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Client } from 'src/Model/client.model';
import { Contact } from 'src/Model/contact.model';
import { Offre } from 'src/Model/offre.model';
import  jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  apiUrl = "http://localhost:8081/api"
  loginUserUrl="http://localhost:8081/api/client/login"
  isConnected=false;
  private _clientConnect= new Subject<void>();
  get clienttConnect()
  {
    return this._clientConnect
  }
  constructor(private http : HttpClient,private router:Router) { }
  getOffre(): Observable<Offre[]>{
    return this.http.get<Offre[]>(this.apiUrl + "/offre");
  }
  isLoggedIn(){

    let token = localStorage.getItem("idC");

    if (token) {
      return true ;
    } else {
      return false;
    }
  }
  loginClient(client:Client){
    this.loginClientFromApi(client).subscribe((data)=>{
      console.log(data)
      var decoded:any = jwt_decode(data.token);
 
      console.log(decoded);
      this.loginInClient(decoded.data)
      this._clientConnect.next()
    })
  }

  loginClientFromApi(client:Client){
    return this.http.post<any>(this.loginUserUrl, client);
  }
  loginInClient(data:any){
    localStorage.setItem("idC",data.id)
    this.isConnected=true
    this.router.navigate(['/offre'])
  }
  addNewContact(contact:Contact){
    return this.http.post<any>(this.apiUrl+"/contact", contact);
  }
  addNewClient(client:Client){
    return this.http.post<any>(this.apiUrl+"/client", client);
  }
  reserverFromApi(rq:any){
    return this.http.post<any>( "http://localhost:8081/api/reservation" ,rq);
 }
 getAllReservationbyClientId(){
  return this.http.get<any>( "http://localhost:8081/api/reservation/get-all-by-id-client/"+localStorage.getItem("idC"));
}
}