import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonList } from './components/person/person-list/person-list.component';
import { PersonEdit } from './components/person/person-edit/person-edit.component';
import { PersonCreate } from './components/person/person-create/person-create.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'list', component: PersonList, canActivate: [AuthGuard] },
  { path: 'update/:id', component: PersonEdit, canActivate: [AuthGuard] },
  { path: 'create', component: PersonCreate, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
