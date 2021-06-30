import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NoticeAddComponent} from './notice-add/notice-add.component';
import {NoticeListComponent} from './notice-list/notice-list.component';
import {NoticeUpdateComponent} from './notice-update/notice-update.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  {
    component: NoticeAddComponent,
    path: 'add'
  },
  {
    component: NoticeListComponent,
    path: 'list'
  },
  {
    component: NoticeUpdateComponent,
    path: 'update'
  },
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: RegisterComponent,
    path: 'register'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
