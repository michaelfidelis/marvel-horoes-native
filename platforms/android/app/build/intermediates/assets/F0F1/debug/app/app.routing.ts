import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { AuthModule } from "./auth/auth.module";
import { AuthRouteGuard } from "./auth/auth-route.guard";
import { LoginBypassRouteGuard } from "./auth/login-bypass.guard";

const routes: Routes = [
    { path: "", redirectTo: "/quadrinhos", pathMatch: "full" },
    { path: "quadrinhos", loadChildren: './quadrinhos/quadrinhos.module#QuadrinhosModule' },
    { path: "auth", loadChildren: './auth/auth.module#AuthModule' },
    
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }