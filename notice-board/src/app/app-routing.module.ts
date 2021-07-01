import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NoticeAddComponent} from './notice-add/notice-add.component';
import {NoticeListComponent} from './notice-list/notice-list.component';
import {NoticeUpdateComponent} from './notice-update/notice-update.component';

const routes: Routes = [
  {
    component: NoticeAddComponent,
    path: 'add'
  },
  {
    component: NoticeUpdateComponent,
    path: 'update/:id'
  },
  {
    component: NoticeListComponent,
    path: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
