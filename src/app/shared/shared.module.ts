import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';
import { MatIconModule} from '@angular/material/icon';
import { SuccessModalComponent } from './success-modal/success-modal.component';

const materialModules = [
  MatIconModule
]

@NgModule({
  declarations: [
    SuccessModalComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ...materialModules
  ],
  exports: [
    SuccessModalComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }  
  ]
})
export class SharedModule { }
