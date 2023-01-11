import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule, routes } from "./home.module.routing";

@NgModule({
    declarations: [
      HomeComponent,
    ],
  
    exports: [
    ],
  
    imports: [
        RouterModule.forChild(routes),
        HomeRoutingModule,
        CommonModule,
    ],
    providers: [ ],
  
  })
  export class HomeModule { }