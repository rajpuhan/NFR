import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoreModule } from '../core/core.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    DashboardHomeComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class FeatureModule { }
