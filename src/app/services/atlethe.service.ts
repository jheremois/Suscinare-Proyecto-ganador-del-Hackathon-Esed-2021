import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserModel } from '../models/user.model';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }
 
  private url = 'http://localhost:4000/api/v1/at'

  signup (user:UserModel){

    let authData = {
      ...user
    }
    
    this.http.post(`${this.url}/field`, authData).subscribe(
      (response) => {
        console.log(response)
        console.log(response)
        this.router.navigateByUrl("/zt")
      },
      (error) => console.log(error)
    )

  }

  add_fied (user:UserModel){

    let authData = {
      ...user
    }
    
    return this.http.post(`${this.url}/join/field`, authData, {withCredentials: true})

  }

}
