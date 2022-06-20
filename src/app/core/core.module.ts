import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatIconModule} from '@angular/material/icon';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RouterModule } from '@angular/router';

const materialModules = [
  MatIconModule
]


@NgModule({
  declarations: [
    HeaderComponent,
    SideNavComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    ...materialModules
  ],
  exports: [
    HeaderComponent,
    SideNavComponent
  ]
})
export class CoreModule { }
