import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SignupComponentComponent } from './signup-component/signup-component.component';
import { BuyerdashboardComponent } from './buyerdashboard/buyerdashboard.component';
import { SellerdashboardComponent } from './sellerdashboard/sellerdashboard.component';
import { ViewAllPropertiesComponent } from './view-all-properties/view-all-properties.component';
import { ViewPropertiesComponent } from './view-properties/view-properties.component';
import { UpdatePropertyComponent } from './update-property/update-property.component';
import { RegisterPropertyComponent } from './register-property/register-property.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponentComponent
    },
    {
      path:'user/register',
      component:SignupComponentComponent
    },
    {
      path:'user/buyer',
      component:BuyerdashboardComponent
    },
    {
      path:'user/seller',
      component:SellerdashboardComponent
    },
    {
      path:'user/properties',
      component:ViewAllPropertiesComponent
    },
    {
      path:'user/my-properties',
      component:ViewPropertiesComponent
    },
    {
      path:'user/register/property',
      component:RegisterPropertyComponent
    },
    {
      path:'user/update/:id',
      component:UpdatePropertyComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
