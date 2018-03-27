import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { CoreModule } from './../core';
import { SharedModule} from './../shared/shared.module';
import { ComicListComponent } from "../shared/comic-list/comic-list.component";
import { ListaQuadrinhosComponent } from "./lista-quadrinhos/lista-quadrinhos.component";
import { DetalheQuadrinhoComponent } from "./detalhe-quadrinho/detalhe-quadrinho.component";
import { QuadrinhosRoutingModule } from "./quadrinhos.routing";
import { ListaColecaoComponent } from "./lista-colecao/lista-colecao.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CoreModule,
        SharedModule,
        QuadrinhosRoutingModule
    ],
    declarations: [
        ListaQuadrinhosComponent,
        DetalheQuadrinhoComponent,
        ListaColecaoComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class QuadrinhosModule { }
