import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AuthRouteGuard } from "./../auth/auth-route.guard";
import { ListaQuadrinhosComponent } from "./lista-quadrinhos/lista-quadrinhos.component";

const routes: Routes = [
    { path: '', children: [
      { path: '', component: ListaQuadrinhosComponent },
    ]},
  ];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class QuadrinhosRoutingModule { }