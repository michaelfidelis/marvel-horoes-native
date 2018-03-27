import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { CoreModule } from './../core';
import { SharedModule} from './../shared/shared.module';
import { ComicListComponent } from "../shared/comic-list/comic-list.component";
import { ComicDetailComponent } from "../shared/comic-detail/comic-detail.component";
import { ListaQuadrinhosComponent } from "./lista-quadrinhos/lista-quadrinhos.component";
import { QuadrinhosRoutingModule } from "./quadrinhos.routing";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CoreModule,
        SharedModule,
        QuadrinhosRoutingModule
    ],
    declarations: [
        ListaQuadrinhosComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class QuadrinhosModule { }
