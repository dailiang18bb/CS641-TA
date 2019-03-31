import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './home/detail/detail.component';

const routes: Routes = [
  { path:'', component:HomeComponent},
  { 
    path:'home',
    component:HomeComponent,
    children : [
      { 
        path: ':data', 
        component: HomeComponent
      }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
