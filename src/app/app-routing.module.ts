import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListeContactComponent } from './liste-contact/liste-contact.component';
import { AccueilComponent } from './accueil/accueil.component';



const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch:"full"},
  { path: '', component: AccueilComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'liste-contact', component: ListeContactComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
   
 
}
