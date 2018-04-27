import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthService, QuadrinhoService, ColecaoPessoalService, CacheService, MockAuthInterceptor } from "./core";
import { LoginBypassRouteGuard } from "./auth/login-bypass.guard"; 
import { AuthRouteGuard } from "./auth/auth-route.guard";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        HttpClientModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
    ],
    providers: [
        AuthService, ColecaoPessoalService, QuadrinhoService, LoginBypassRouteGuard, AuthRouteGuard, CacheService,
        {provide: HTTP_INTERCEPTORS, useClass: MockAuthInterceptor, multi: true}
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
