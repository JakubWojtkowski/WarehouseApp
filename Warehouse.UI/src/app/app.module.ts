import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WarehousesListComponent } from './components/components/Warehouses/warehouses-list/warehouses-list.component';
import { DeliveriesListComponent } from './components/components/Deliveries/deliveries-list/deliveries-list.component';
import { CommonModule } from '@angular/common';
import { AddWarehouseComponent } from './components/components/Warehouses/add-warehouse/add-warehouse.component';
import { AddDeliveryComponent } from './components/components/Deliveries/add-delivery/add-delivery.component';
import { EditWarehouseComponent } from './components/components/Warehouses/edit-warehouse/edit-warehouse.component';
import { EditDeliveryComponent } from './components/components/Deliveries/edit-delivery/edit-delivery.component';
import { LoginComponent } from './components/components/Login/login/login.component';
import { UserRegisterComponent } from './components/components/Register/user-register/user-register.component';
import { MsalInterceptor, MsalInterceptorConfiguration, MsalModule, MsalService, MSAL_INSTANCE, MSAL_INTERCEPTOR_CONFIG } from '@azure/msal-angular';
import { environment } from '../environments/environment';
import { MsaluserService } from './services/msalUser/msaluser.service';
import { InteractionType, IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { ProfileComponent } from './components/components/Users/profile/profile/profile.component';
import { HomeComponent } from './components/components/Home/home/home.component';
import { InhibitWarehouseComponent } from './components/components/Warehouses/inhibit-warehouse/inhibit-warehouse/inhibit-warehouse.component';
import { ActiveWarehouseComponent } from './components/components/Warehouses/active-warehouse/active-warehouse/active-warehouse.component';
import { LogoutComponent } from './components/components/Logout/logout/logout.component';
// Trucks&Paths
import { TrucksComponent } from './components/components/Trucks/trucks/trucks.component';
import { TruckItemComponent } from './components/components/Trucks/truck-item/truck-item.component';
import { AddTruckComponent } from './components/components/Trucks/add-truck/add-truck.component';
import { PathItemComponent } from './components/components/Paths/path-item/path-item.component';
import { AddPathComponent } from './components/components/Paths/add-path/add-path.component';
import { PathsHeaderComponent } from './components/components/Paths/path-header/paths-header.component';
import { TrucksBoxComponent } from './components/components/Trucks/trucks-box/trucks-box.component';
import { PathsBoxComponent } from './components/components/Paths/path-box/paths-box.component';
import { TruckRouteBoxComponent } from './components/components/Trucks/truck-route-box/truck-route-box.component';
import { TruckRouteHeaderComponent } from './components/components/Trucks/truck-route-header/truck-route-header.component';
import { TruckRouteComponent } from './components/components/Trucks/truck-route/truck-route.component';
import { ButtonComponent } from './components/components/button/button.component';
import { PathsComponent } from './components/components/Paths/paths/paths.component';
import { TrucksHeaderComponent } from './components/components/Trucks/trucks-header/trucks-header.component';
import { PathListComponent } from './components/components/Paths/path-list/path-list/path-list.component';
import { RoutesListComponent } from './components/components/Routes/routes-list/routes-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TruckRouteItemComponent } from './components/components/truck-route-item/truck-route-item.component';
import { UsersManageComponent } from './components/components/Users/administrator/users-manage/users-manage/users-manage.component';
import { UserCancelComponent } from './components/components/Users/administrator/user-cancel/user-cancel/user-cancel.component';
import { UserRemoveComponent } from './components/components/Users/administrator/user-cancel/user-remove/user-remove/user-remove.component';

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: environment.uiClientId,
      redirectUri: environment.redirectUri
    }
  })
}

export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<string, Array<string>>();
  protectedResourceMap.set('https://graph.microsoft.com/v1.0/me', ['user.read']);

  return {
    interactionType: InteractionType.Popup,
    protectedResourceMap
  };
}

@NgModule({
  declarations: [
    AppComponent,
    WarehousesListComponent,
    DeliveriesListComponent,
    AddWarehouseComponent,
    AddDeliveryComponent,
    EditWarehouseComponent,
    EditDeliveryComponent,
    LoginComponent,
    UserRegisterComponent,
    ProfileComponent,
    HomeComponent,
    InhibitWarehouseComponent,
    ActiveWarehouseComponent,
    LogoutComponent,
    PathItemComponent,
    TruckItemComponent,
    TrucksBoxComponent,
    PathsBoxComponent,
    TruckRouteBoxComponent,
    ButtonComponent,
    PathsComponent,
    AddPathComponent,
    PathsHeaderComponent,
    AddTruckComponent,
    TruckRouteHeaderComponent,
    TruckRouteComponent,
    TrucksComponent,
    TrucksHeaderComponent,
    ButtonComponent,
    PathListComponent,
    RoutesListComponent,
    TruckRouteItemComponent,
    UsersManageComponent,
    UserCancelComponent,
    UserRemoveComponent
    ],
  imports: [
  /*  MsalModule.forRoot(new PublicClientApplication
      (
        {
          auth: {
            clientId: environment.uiClientId,
            redirectUri: environment.redirectUri,
            authority: 'https://login.microsoftonline.com/1b1fe4cd-b465-418a-848b-53c3c728234b',
          },
          cache:
          {
            cacheLocation: 'localStorage',
            storeAuthStateInCookie: false
          }
        }
      )),*/
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    OAuthModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    MsalService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    }, {
      provide: MSAL_INTERCEPTOR_CONFIG,
      useFactory: MSALInterceptorConfigFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
