import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionOneComponent } from './section-one/section-one.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { SignupPageTwoComponent } from './signup-page-two/signup-page-two.component';
import { SignupPageThreeComponent } from './signup-page-three/signup-page-three.component';
import { DetailProfileComponent } from './detail-profile/detail-profile.component';


const routes: Routes = [
  {
    path: '', component: SectionOneComponent
  },
  {
    path: 'login', component: LoginPageComponent
  },
  {
    path: 'signup', component: SignupPageComponent
  },
  {
    path: 'signup-two', component: SignupPageTwoComponent
  },
  {
    path: 'signup-three', component: SignupPageThreeComponent
  },
  {
    path: 'detail-profile', component: DetailProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
