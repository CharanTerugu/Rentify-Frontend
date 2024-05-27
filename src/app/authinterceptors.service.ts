import { Injectable } from '@angular/core';
import { LoginServiceService } from './login-service.service';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { jwtDecode } from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthinterceptorsService {

  constructor(private loginservice:LoginServiceService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
    const token = localStorage.getItem('token');

 

    if(token){
      const isTokenExpired=this.isTokenExpired(token);
      if(isTokenExpired){
        this.loginservice.logout();

        return throwError('JWT token has Expired');
      }
      else{
        console.log("not expired")
        const clonedReq = req.clone({
 
              headers: req.headers.set('Authorization', 'Bearer ' + token)
       
            });
       
            return next.handle(clonedReq);
       
          } }
          else {
       
            return next.handle(req);
       
          }
      }

 isTokenExpired(token: string):boolean{
  try{
    const decodedToken:any= jwtDecode(token);
    const expirationTime=decodedToken.exp*1000;
    console.log(expirationTime)
    return expirationTime<Date.now();
  }
  catch(error){
    return true;
  }
}
}
