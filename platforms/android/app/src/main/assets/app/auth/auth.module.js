"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var auth_routing_module_1 = require("./auth-routing.module");
var cadastro_component_1 = require("./cadastro/cadastro.component");
var login_component_1 = require("./login/login.component");
var forms_1 = require("nativescript-angular/forms");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                forms_1.NativeScriptFormsModule,
                auth_routing_module_1.AuthRoutingModule
            ],
            declarations: [cadastro_component_1.CadastroComponent, login_component_1.LoginComponent],
            exports: [cadastro_component_1.CadastroComponent, login_component_1.LoginComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFFdkUsNkRBQTBEO0FBQzFELG9FQUFrRTtBQUNsRSwyREFBeUQ7QUFDekQsb0RBQXFFO0FBWXJFO0lBQUE7SUFBMEIsQ0FBQztJQUFkLFVBQVU7UUFWdEIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLGlDQUF3QjtnQkFDeEIsK0JBQXVCO2dCQUN2Qix1Q0FBaUI7YUFDbEI7WUFDRCxZQUFZLEVBQUUsQ0FBQyxzQ0FBaUIsRUFBRSxnQ0FBYyxDQUFDO1lBQ2pELE9BQU8sRUFBRSxDQUFDLHNDQUFpQixFQUFFLGdDQUFjLENBQUM7WUFDNUMsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7U0FDNUIsQ0FBQztPQUNXLFVBQVUsQ0FBSTtJQUFELGlCQUFDO0NBQUEsQUFBM0IsSUFBMkI7QUFBZCxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcblxuaW1wb3J0IHsgQXV0aFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2F1dGgtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FkYXN0cm9Db21wb25lbnQgfSBmcm9tICcuL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiOyBcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgQXV0aFJvdXRpbmdNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ2FkYXN0cm9Db21wb25lbnQsIExvZ2luQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0NhZGFzdHJvQ29tcG9uZW50LCBMb2dpbkNvbXBvbmVudF0sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRoTW9kdWxlIHsgfVxuIl19