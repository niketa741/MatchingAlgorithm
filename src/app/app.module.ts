import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppErrorHandler } from './common/AppErrorHandler';

import { LoginService } from './services/login.service';

import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { ContractorComponent } from './contractor/contractor.component';
import { LoginComponent } from './login/login.component';

import { MatTabsModule } from '@angular/material';
import { TemplateComponent } from './template/template.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ContractorComponent,
    LoginComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [
    LoginService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
