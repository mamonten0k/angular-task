import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TabComponent, TabsComponent, TableComponent } from './shared';
import { SummaryPageComponent, CardComponent } from './summary';
import { ListPageComponent } from './list';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: SummaryPageComponent },
  { path: 'navigation', component: ListPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TabComponent,
    TabsComponent,
    TableComponent,
    ListPageComponent,
    SummaryPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
