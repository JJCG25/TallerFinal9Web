import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' } // Redirige la ruta raíz a 'users'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
