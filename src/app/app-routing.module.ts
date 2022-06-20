import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from './feature/dashboard-home/dashboard-home.component';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { LoginComponent } from './feature/login/login.component';
import { AddFlightComponent } from './feature/add-flight/add-flight.component';
import { ViewFlightComponent } from './feature/view-flight/view-flight.component';
import { SearchFlightComponent } from './feature/search-flight/search-flight.component';
import { AddAirportComponent } from './feature/add-airport/add-airport.component';
import { ViewAirportComponent } from './feature/view-airport/view-airport.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent,
children:[{
  path:'',
  redirectTo: 'home',
  pathMatch: 'full'
},
  {path: 'home',
  component: DashboardHomeComponent
},
{
  path: 'addflight',
  component: AddFlightComponent
},
{
  path: 'viewflight',
  component: ViewFlightComponent
},
{
  path: 'addairport',
  component: AddAirportComponent
},
{
  path: 'viewairport',
  component: ViewAirportComponent
},
{
  path: 'searchflight',
  component: SearchFlightComponent
}
]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
