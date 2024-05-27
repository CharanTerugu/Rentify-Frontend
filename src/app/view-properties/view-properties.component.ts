import { Component, OnInit } from '@angular/core';
import { Property } from '../register-property/property';
import { PropertyServiceService } from '../property-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-properties',
  templateUrl: './view-properties.component.html',
  styleUrls: ['./view-properties.component.css']
})
export class ViewPropertiesComponent implements OnInit  {




  properties: Property[]={} as Property[];
  msg:string="";
  
  constructor(private service:PropertyServiceService,private router:Router){}
  ngOnInit(){
this.myProperties();
  }
myProperties(){
  this.service.myProperties().subscribe((data)=>{
    this.properties=data
  })
}

  delete(id: number) {
    this.service.deleteProperty(id).subscribe((data)=>{
      this.msg=data
      this.myProperties();
    },error=>this.msg=error)
    }
    
  
  
  
    
}
