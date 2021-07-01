import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticeAddComponent } from './notice-add/notice-add.component';
import { NoticeUpdateComponent } from './notice-update/notice-update.component';
import { NoticeListComponent } from './notice-list/notice-list.component';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NoticeGetsingleComponent } from './notice-getsingle/notice-getsingle.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticeAddComponent,
    NoticeUpdateComponent,
    NoticeListComponent,
    NoticeGetsingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
