import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EmailComponent } from './email/email.component';

const routes: Routes = [

  { 
    path: 'sendEmail', 
    component: EmailComponent,
    pathMatch: "full"
  },
  { 
    path: '', 
    component: HomeComponent ,
    pathMatch: "full"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
