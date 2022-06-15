import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatIconModule} from '@angular/material/icon';
import { SideNavComponent } from './side-nav/side-nav.component';

const materialModules = [
  MatIconModule
]


@NgModule({
  declarations: [
    HeaderComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    ...materialModules
  ],
  exports: [
    HeaderComponent,
    SideNavComponent
  ]
})
export class CoreModule { }
