import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Property } from './register-property/property';
import { UserDetails } from './view-all-properties/UserDetails';

@Injectable({
  providedIn: 'root'
})
export class PropertyServiceService {

 
  baseurl="http://rentifyservices-tag.onrender.com";
  constructor(private httpclient:HttpClient,private router:Router) { }

registerProperty(property:Property):Observable<any>{
  return this.httpclient.post(`${this.baseurl}/seller/register`,property,{responseType:'text' as 'json'})

}
myProperties():Observable<Property[]>{
  return this.httpclient.get<Property[]>(`${this.baseurl}/seller/myproperties`)
}
allProperties(minBedrooms:number):Observable<Property[]>{
  const params = { minBedrooms};
  return this.httpclient.get<Property[]>(`${this.baseurl}/properties/all`,{params})
}
updateLike(id:number):Observable<any>{
  return this.httpclient.put(`${this.baseurl}/buyer/likes/${id}`,{})
}


sellerDetails(id:number):Observable<UserDetails>{
  return this.httpclient.get<UserDetails>(`${this.baseurl}/buyer/intrested/${id}`)
}

deleteProperty(id:number):Observable<any>{
  return this.httpclient.delete(`${this.baseurl}/seller/delete/${id}`,{responseType:'text' as 'json'})
}
updateProperty(id:number,property:Property):Observable<Object>{
  return this.httpclient.put(`${this.baseurl}/seller/property/update/${id}`,property,{responseType:'text' as 'json'})
}
getPropertyById(id:number):Observable<Property>{
  return this.httpclient.get<Property>(`${this.baseurl}/seller/property/${id}`)
}

}