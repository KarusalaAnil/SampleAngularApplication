import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AgePipe } from './pipes/age.pipe';
import { JwtInterceptor } from 'src/app/core/interceptors/jwt.interceptor';
import { ErrorInterceptor } from 'src/app/core/interceptors/error.interceptor';



@NgModule({
  declarations: [
    AgePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  exports: [
    AgePipe,         // <--- MUST ADD THIS to use it in other modules
    FormsModule,     // Re-exporting allows modules to use ngModel
    CommonModule,    // Re-exporting allows modules to use *ngIf, *ngFor
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
