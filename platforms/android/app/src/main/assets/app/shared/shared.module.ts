import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { CoreModule } from './../core';
import { ComicListComponent} from './comic-list/comic-list.component';
import { DatePipe } from "@angular/common";
import { Vibrate } from "nativescript-vibrate";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CoreModule
    ],
    declarations: [
        ComicListComponent
    ],
    exports: [
        ComicListComponent
    ],
    providers: [DatePipe, Vibrate],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SharedModule { }
 