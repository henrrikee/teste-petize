import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {InputTextModule} from 'primeng/inputtext';
import { TreeSelectModule } from 'primeng/treeselect';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    InputTextModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
