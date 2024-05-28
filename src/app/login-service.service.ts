import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { user } from './login-component/User';
import { signup } from './signup-component/signup';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  baseurl="http://rentifyservices-tag.onrender.com";

  constructor(private httpclient:HttpClient,private router:Router) { }

  login(user:user):Observable<any>
  {
    localStorage.clear();
    return this.httpclient.post(`${this.baseurl}/user/authenticate`,user,{responseType:'text' as 'json'}).pipe(catchError(this.handleError));
  }
 
userSignup(user:signup):Observable<any>{
  localStorage.clear();
  return this.httpclient.post(`${this.baseurl}/user/register`,user,{responseType:'text' as 'json'})

}

 logout():void{
 this.router.navigate(['/login'])
 }
 private handleError(error: HttpErrorResponse) {

    
  if (error.status === 0) {
   
    console.error('An error occurred:', error.error);
  } 
  else {
  
    
    console.error(error.error);
    
  }
 
  console.log(error)
  return throwError(error);
}
}
