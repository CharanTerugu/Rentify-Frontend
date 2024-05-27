import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginServiceService } from './login-service.service';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthinterceptorsService } from './authinterceptors.service';
import { SignupComponentComponent } from './signup-component/signup-component.component';
import { SellerdashboardComponent } from './sellerdashboard/sellerdashboard.component';
import { BuyerdashboardComponent } from './buyerdashboard/buyerdashboard.component';
import { RegisterPropertyComponent } from './register-property/register-property.component';
import { ViewAllPropertiesComponent } from './view-all-properties/view-all-properties.component';
import { ViewPropertiesComponent } from './view-properties/view-properties.component';
import { UpdatePropertyComponent } from './update-property/update-property.component';
import { SellerNavbarComponent } from './seller-navbar/seller-navbar.component';
import { BuyerNavbarComponent } from './buyer-navbar/buyer-navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    NavBarComponent,
    SignupComponentComponent,
    SellerdashboardComponent,
    BuyerdashboardComponent,
    RegisterPropertyComponent,
    ViewAllPropertiesComponent,
    ViewPropertiesComponent,
    UpdatePropertyComponent,
    SellerNavbarComponent,
    BuyerNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config:{
        tokenGetter:()=>{
          return localStorage.getItem('token')
        },
      },
    })
  ],
  providers: [LoginServiceService,{provide:HTTP_INTERCEPTORS, useClass:AuthinterceptorsService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
