import { Component } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { user } from './User';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {

constructor(private servie:LoginServiceService,private router:Router){}
  user:user={} as user;
msg:string=""
  submit() {
         this.servie.login(this.user).subscribe((res:any)=>{
          localStorage.setItem('token',res);
          const token =localStorage.getItem('token')
          const helper = new JwtHelperService();
          if(token){
          const decode=helper.decodeToken(token)
         if(decode.roles[0].authority==="ROLE_SELLER"){
                   this.router.navigate(['/user/seller'])
         }
         else{
          this.router.navigate(['/user/buyer'])
         }
          }
         

          alert("login success")
          console.log(localStorage.getItem('token'))
         },error=>this.msg=error.error)
    }
}
