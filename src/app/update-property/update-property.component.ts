import { Component, OnInit } from '@angular/core';
import { PropertyServiceService } from '../property-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from '../register-property/property';

@Component({
  selector: 'app-update-property',
  templateUrl: './update-property.component.html',
  styleUrls: ['./update-property.component.css']
})
export class UpdatePropertyComponent implements OnInit {


  id:number=0;
  property:Property={} as Property;
  constructor(private service:PropertyServiceService,private activated:ActivatedRoute,private router:Router)
  {
    this.activated.params.subscribe(paramsId => {
      this.id = paramsId['id'];
     
    })
  }
  ngOnInit() {
   
   this.service.getPropertyById(this.id).subscribe((data)=>{
    console.log(data)
this.property=data
   })
  }

  saveProperty() {
    this.service.updateProperty(this.id,this.property).subscribe((data)=>{
      this.router.navigate(['user/my-properties'])
    })
    }

}

  
  


  
