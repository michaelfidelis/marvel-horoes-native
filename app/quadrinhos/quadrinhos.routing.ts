import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AuthRouteGuard } from "./../auth/auth-route.guard";
import { ListaQuadrinhosComponent } from "./lista-quadrinhos/lista-quadrinhos.component";
import { DetalheQuadrinhoComponent } from "./detalhe-quadrinho/detalhe-quadrinho.component";
import { ListaColecaoComponent } from "./lista-colecao/lista-colecao.component";

const routes: Routes = [
    { path: '', children: [
      { path: '', component: ListaQuadrinhosComponent },
      { path: 'detalhes', component: DetalheQuadrinhoComponent },
      { path: 'colecao', component: ListaColecaoComponent },
      
    ]},
  ];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class QuadrinhosRoutingModule { }