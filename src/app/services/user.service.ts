import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserModel } from '../models/user.model';
import { Router } from "@angular/router";
import { ThisReceiver } from '@angular/compiler';
import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }
 
  private url = 'http://localhost:4000/api/v1/auth'
  private logged = new BehaviorSubject<boolean>(false)

  signup (user:UserModel){

    let authData = {
      ...user
    }
    
    return this.http.post(`${this.url}/signup`, authData).pipe(
      map( (res: any)=> {
        console.log(res.data._id)
        this.saveToken(res.data._id)
      }),
      catchError((err) => this.handlerErr(err))
    )
  }

  get isLogged(): Observable<boolean>{
    return this.logged.asObservable()
  }

  login(user:UserModel){

    let authData = {
      ...user
    }
    
    return this.http.post(`${this.url}/login`, authData, {withCredentials: true})
      .pipe(
        map( (res: any)=> {
          console.log(res.data._id)
          this.saveToken(res.data._id)
          this.logged.next(true)
        }),
        catchError((err) => this.handlerErr(err))
      )

  }

  logout (){
    
    this.http.get(`${this.url}/logout`, {withCredentials: true}).subscribe(
      async ()=> {
        await this.logged.next(false)
        this.router.navigateByUrl("/")
      }
    )

  }

  user_data (){
    return this.http.get(`${this.url}/me`, {withCredentials: true})
  }

  private handlerErr(err): Observable<never> {
    let errmsg = "Auth err"
    if(err){
      errmsg=`Error: code ${err.message}`
    }
    window.alert(errmsg)
    return throwError(errmsg)
  }

  private saveToken(token: string){
    localStorage.setItem('zcuid', token)
  }

  private checkToken(){
    const usertoken = localStorage.getItem('zcuid')
  }

}


