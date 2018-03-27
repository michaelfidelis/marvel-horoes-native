import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { CoreModule } from './../core';
import { ComicListComponent} from './comic-list/comic-list.component';
import { ComicDetailComponent} from './comic-detail/comic-detail.component';
import { DatePipe } from "@angular/common";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CoreModule
    ],
    declarations: [
        ComicListComponent,
        ComicDetailComponent
    ],
    exports: [
        ComicListComponent,
        ComicDetailComponent
    ],
    providers: [DatePipe],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SharedModule { }
