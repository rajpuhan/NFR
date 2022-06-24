import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { ViewFlightComponent } from './view-flight/view-flight.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { AddAirportComponent } from './add-airport/add-airport.component';
import { ViewAirportComponent } from './view-airport/view-airport.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatIconModule} from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';

const materialModules = [
  MatIconModule
]

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    DashboardHomeComponent,
    AddFlightComponent,
    ViewFlightComponent,
    SearchFlightComponent,
    AddAirportComponent,
    ViewAirportComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    ...materialModules
  ]
})
export class FeatureModule { }
