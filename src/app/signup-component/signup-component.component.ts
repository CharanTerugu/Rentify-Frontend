import { Component } from '@angular/core';
import { signup } from './signup';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-signup-component',
  templateUrl: './signup-component.component.html',
  styleUrls: ['./signup-component.component.css']
})
export class SignupComponentComponent {
 msg:string=""

  constructor(private service:LoginServiceService){}
signup:signup={} as signup;

submit() {
this.service.userSignup(this.signup).subscribe((data)=>{
  this.msg=data
  console.log(data);
  this.signup={email:"",firstName:"",lastName:"",password:"",phoneNumber:"",roles:""}
},error=>this.msg=error.error)
}
}


