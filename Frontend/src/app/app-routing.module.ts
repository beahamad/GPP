import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { LoginComponent } from './account/login/login.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { AuthGuard } from './account/shared/auth.guard';
import { HomeScreenComponent } from './telas/home-screen/home-screen.component';
import { PerfilComponent } from './telas/perfil/perfil.component';
import { EditPerfilComponent } from './telas/edit-perfil/edit-perfil.component';
import { AddDispositivoComponent } from './telas/add-dispositivo/add-dispositivo.component';
import { PoliciaComponent } from './telas/policia/policia.component';
import { authPoliciaGuard } from './account/shared/auth-policia.guard';

const routes: Routes = [
  {
    path: 'policia',
    component: PoliciaComponent
  },
  {
    path: '',
    component: HomeComponent,
    children:[
      {path: 'perfil', component: PerfilComponent},
      {path: 'edit-perfil', component: EditPerfilComponent},
      { path: 'adicionar-dispositivo', component: AddDispositivoComponent}
    ],
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', component: HomeScreenComponent},
      { path: 'login', component: LoginComponent },
      { path: 'create-account', component: CreateAccountComponent }
      
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
