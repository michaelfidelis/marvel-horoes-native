import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptHttpModule,
        HttpClientModule,
    ],
    declarations: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CoreModule { }
