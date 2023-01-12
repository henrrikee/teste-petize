import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {InputTextModule} from 'primeng/inputtext';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import {ButtonModule} from 'primeng/button';
import { HomeComponent } from './pages/home/home.component';
import { GitHubService } from './shared/external-service/github.service';
import { HttpClientModule } from '@angular/common/http';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { PagesModule } from './pages/pages.module';
import { AvatarModule } from 'primeng/avatar';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PerfilComponent
  ],
  imports: [
    CardModule,
    AvatarModule,
    PagesModule,
    HttpClientModule,
    CommonModule,
    InputTextModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: true
    }),
    ButtonModule    
  ],
  providers: [
    GitHubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
