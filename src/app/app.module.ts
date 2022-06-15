import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureModule } from './feature/feature.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule} from '@angular/material/icon';
import { CoreModule } from './core/core.module';

const materialModules = [
  MatIconModule
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureModule,
    CoreModule,
    BrowserAnimationsModule,
    ...materialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
