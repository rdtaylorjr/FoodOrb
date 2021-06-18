import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { GetStartedMenuComponent } from './components/get-started/get-started-menu/get-started-menu.component';
import { WelcomeComponent } from './components/get-started/welcome/welcome.component';
import { RegisterComponent } from './components/get-started/register/register.component';
import { LoginComponent } from './components/get-started/login/login.component';
import { PasswordComponent } from './components/get-started/password/password.component';

import { HomeComponent } from './components/home/home.component';
import { HomeMenuComponent } from './components/home/home-menu/home-menu.component';
import { SearchComponent } from './components/home/search/search.component';
import { CartComponent } from './components/home/cart/cart.component';
import { OrderComponent } from './components/home/order/order.component';
import { ProfileComponent } from './components/home/profile/profile.component';

import { SettingsComponent } from './components/home/settings/settings.component';
import { PaymentComponent } from './components/home/settings/payment/payment.component';
import { AddressComponent } from './components/home/settings/address/address.component';
import { AddPaymentComponent } from './components/home/settings/payment/add-payment/add-payment.component';
import { EditPaymentComponent } from './components/home/settings/payment/edit-payment/edit-payment.component';
import { DeletePaymentComponent } from './components/home/settings/payment/delete-payment/delete-payment.component';
import { AddAddressComponent } from './components/home/settings/address/add-address/add-address.component';
import { EditAddressComponent } from './components/home/settings/address/edit-address/edit-address.component';
import { DeleteAddressComponent } from './components/home/settings/address/delete-address/delete-address.component';

const ROUTES: Routes = [
  { path: '', redirectTo: '/get-started/welcome', pathMatch: 'full' },
  { path: 'get-started', component: GetStartedComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'register/:view', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'password', component: PasswordComponent }
    ]
  },
  { path: 'home', component: HomeComponent,
    children: [
      { path: 'search', component: SearchComponent },
      { path: 'cart', component: CartComponent },
      { path: 'order', component: OrderComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'address', component: AddressComponent }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    GetStartedComponent,
    GetStartedMenuComponent,
    WelcomeComponent,
    RegisterComponent,
    LoginComponent,
    PasswordComponent,
    HomeComponent,
    HomeMenuComponent,
    SearchComponent,
    CartComponent,
    OrderComponent,
    ProfileComponent,
    SettingsComponent,
    PaymentComponent,
    AddressComponent,
    AddPaymentComponent,
    EditPaymentComponent,
    DeletePaymentComponent,
    AddAddressComponent,
    EditAddressComponent,
    DeleteAddressComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
