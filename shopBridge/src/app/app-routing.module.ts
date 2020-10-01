import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InformationComponent } from './components/information/information.component';


const routes: Routes = [
  {path:"",component: NavbarComponent, children:[
    
    {path:"",component: HomeComponent},
    {path:"information/:id",component:InformationComponent}
    
  ]}
];

@NgModule({
  imports: [RouterModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
