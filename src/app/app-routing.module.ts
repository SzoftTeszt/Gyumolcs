import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GyumolcsokComponent } from './gyumolcsok/gyumolcsok.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:"gyumolcsok",component:GyumolcsokComponent},
  {path:"signin",component:SignInComponent},
  {path:"signup",component:SignUpComponent},
  {path:"",redirectTo:"gyumolcsok", pathMatch:"full"},
  {path:"**",component:GyumolcsokComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
