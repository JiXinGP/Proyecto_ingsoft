import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: UserListComponent }, // Ruta predeterminada para la lista de usuarios
  { path: 'form', component: UserFormComponent }, // Ruta para el formulario de usuario
  { path: 'profile/:id', component: UserProfileComponent } // Ruta para el perfil de usuario con parámetro
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
