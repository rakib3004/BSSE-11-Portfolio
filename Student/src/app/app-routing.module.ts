import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"signin",component:SignInComponent},
  {path:"signup",component:SignUpComponent},
  {path:"studentList",component:StudentListComponent},
  {path:"mainpage",component:MainpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
