import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TabComponent, TabsComponent, TableComponent } from './shared';

import { ListComponent } from './list/feature/list.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    TabsComponent,
    TableComponent,
    ListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgxPaginationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
