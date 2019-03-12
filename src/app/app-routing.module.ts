import { ContractorComponent } from './contractor/contractor.component';
import { ProjectComponent } from './project/project.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'homeowner', component: ProjectComponent},
  {path:'contractor', component: ContractorComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
