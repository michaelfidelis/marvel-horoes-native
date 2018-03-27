import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { AuthRoutingModule } from './auth-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from "./login/login.component"; 
import { NativeScriptFormsModule } from "nativescript-angular/forms";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    AuthRoutingModule
  ],
  declarations: [CadastroComponent, LoginComponent],
  exports: [CadastroComponent, LoginComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AuthModule { }
