import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDeliveryComponent } from './components/components/Deliveries/add-delivery/add-delivery.component';
import { DeliveriesListComponent } from './components/components/Deliveries/deliveries-list/deliveries-list.component';
import { EditDeliveryComponent } from './components/components/Deliveries/edit-delivery/edit-delivery.component';
import { HomeComponent } from './components/components/Home/home/home.component';
import { LoginComponent } from './components/components/Login/login/login.component';
import { LogoutComponent } from './components/components/Logout/logout/logout.component';
import { PathListComponent } from './components/components/Paths/path-list/path-list/path-list.component';
import { UserRegisterComponent } from './components/components/Register/user-register/user-register.component';
import { TruckRouteBoxComponent } from './components/components/Trucks/truck-route-box/truck-route-box.component';
import { TrucksBoxComponent } from './components/components/Trucks/trucks-box/trucks-box.component';
import { UserCancelComponent } from './components/components/Users/administrator/user-cancel/user-cancel/user-cancel.component';
import { UserRemoveComponent } from './components/components/Users/administrator/user-cancel/user-remove/user-remove/user-remove.component';
import { UsersManageComponent } from './components/components/Users/administrator/users-manage/users-manage/users-manage.component';
import { ProfileComponent } from './components/components/Users/profile/profile/profile.component';
import { ActiveWarehouseComponent } from './components/components/Warehouses/active-warehouse/active-warehouse/active-warehouse.component';
import { AddWarehouseComponent } from './components/components/Warehouses/add-warehouse/add-warehouse.component';
import { EditWarehouseComponent } from './components/components/Warehouses/edit-warehouse/edit-warehouse.component';
import { InhibitWarehouseComponent } from './components/components/Warehouses/inhibit-warehouse/inhibit-warehouse/inhibit-warehouse.component';
import { WarehousesListComponent } from './components/components/Warehouses/warehouses-list/warehouses-list.component';
import { MsalGuard } from './msal.guard';

const routes: Routes = [
  {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [MsalGuard]
  },

  {
    path: 'trucks',
    component: TrucksBoxComponent,
    canActivate: [MsalGuard]
  },
  {
    path: 'paths',
    component: PathListComponent,
    canActivate: [MsalGuard]
  },
  {
    path: 'routes',
    component: TruckRouteBoxComponent,
    canActivate: [MsalGuard]
  },
  {
    path: 'warehouses',
    component: WarehousesListComponent,
    canActivate: [MsalGuard]
  },
  {
    path: 'deliveries',
    component: DeliveriesListComponent,
    canActivate: [MsalGuard]
  },
  {
    path: 'warehouses/add',
    component: AddWarehouseComponent,
    canActivate: [MsalGuard]
  },
  {
    path: 'deliveries/add',
    component: AddDeliveryComponent,
    canActivate: [MsalGuard]
  },
  {
    path: 'warehouses/edit/:id',
    component: EditWarehouseComponent,
    canActivate: [MsalGuard]
  },
  {
    path: 'deliveries/edit/:id',
    component: EditDeliveryComponent,
    canActivate: [MsalGuard]
  },
  {
    path: 'warehouses/inhibit/:id',
    component: InhibitWarehouseComponent,
    canActivate: [MsalGuard]
  },
  {
    path: 'warehouses/active/:id',
    component: ActiveWarehouseComponent,
    canActivate: [MsalGuard]
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [MsalGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [MsalGuard]
  },
  {
    path: 'accounts',
    component: UsersManageComponent,
    canActivate: [MsalGuard]
  },
  {
    path: 'accounts/register',
    component: UserRegisterComponent,
    canActivate: [MsalGuard]
  },
  {
    path: 'accounts/users',
    component: UserCancelComponent,
    canActivate: [MsalGuard]
  },
  {
    path: 'accounts/users/cancel/:id',
    component: UserRemoveComponent,
    canActivate: [MsalGuard]
  }
//]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
