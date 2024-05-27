import { Component } from '@angular/core';
import { Property } from './property';
import { PropertyServiceService } from '../property-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-property',
  templateUrl: './register-property.component.html',
  styleUrls: ['./register-property.component.css']
})
export class RegisterPropertyComponent {

property:Property={} as Property
  msg: any;
constructor(private service:PropertyServiceService,private router:Router){}

submit() {
 
  this.service.registerProperty(this.property).subscribe((data)=>{
    this.msg=data;
    this.router.navigate(['/user/seller'])
  },error=>this.msg=error.error)
  }
}
