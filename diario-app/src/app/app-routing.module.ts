import { DiariosComponent } from './diarios/diarios.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AngularFireAuthGuard,
  hasCustomClaim,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate } from '@angular/fire/compat/auth-guard';

const redirectLoggedInToDiarios = () => redirectLoggedInTo(['diarios']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Route[] = [
  { path: '', component: HomeComponent },
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirectLoggedInToDiarios),
  },
  {
    path: 'signup',
    component: SignupComponent,
    ...canActivate(redirectLoggedInToDiarios),
  },
  {
    path: 'diarios',
    component: DiariosComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}