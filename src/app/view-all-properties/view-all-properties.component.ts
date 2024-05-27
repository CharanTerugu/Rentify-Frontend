import { Component, OnInit } from '@angular/core';
import { Property } from '../register-property/property';
import { PropertyServiceService } from '../property-service.service';
import { UserDetails } from './UserDetails';

@Component({
  selector: 'app-view-all-properties',
  templateUrl: './view-all-properties.component.html',
  styleUrls: ['./view-all-properties.component.css']
})
export class ViewAllPropertiesComponent implements OnInit{


  properties: Property[]={} as Property[];
  details:UserDetails|null=null
  selectedBedrooms:number=0
  // {}as UserDetails;
  constructor(private service:PropertyServiceService){}
  ngOnInit(){
this.getProperties()
}

getProperties() {
  this.service.allProperties(this.selectedBedrooms).subscribe((data) => {
    this.properties = data;
  });
}
applyFilter() {
  this.getProperties();
  }
updateLikes(id:number) {
  this.service.updateLike(id).subscribe((data)=>{
    console.log(data);
    this.getProperties();
  })
  
  }
  Intrested(id:number) {
    this.service.sellerDetails(id).subscribe((data)=>{
      this.details=data;
      console.log(this.details)
    })
    }

  }

