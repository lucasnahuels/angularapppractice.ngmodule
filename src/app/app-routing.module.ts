import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonList } from './components/person/person-list/person-list.component';
import { PersonEdit } from './components/person/person-edit/person-edit.component';
import { PersonCreate } from './components/person/person-create/person-create.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { PersonDelete } from './components/person/person-delete/person-delete.component';

const routes: Routes = [
  { path: 'create', component: PersonCreate, canActivate: [AuthGuard, RoleGuard], data: { role: 'write' } },
  { path: 'list', component: PersonList, canActivate: [AuthGuard, RoleGuard], data: { role: 'read' } },
  { path: 'update/:id', component: PersonEdit, canActivate: [AuthGuard, RoleGuard], data: { role: 'update' } },
  { path: 'delete', component: PersonDelete, canActivate: [AuthGuard, RoleGuard], data: { role: 'delete' } },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', redirectTo: '/list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
