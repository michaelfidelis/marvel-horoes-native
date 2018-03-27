"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var lista_quadrinhos_component_1 = require("./lista-quadrinhos/lista-quadrinhos.component");
var routes = [
    { path: '', children: [
            { path: '', component: lista_quadrinhos_component_1.ListaQuadrinhosComponent },
        ] },
];
var QuadrinhosRoutingModule = /** @class */ (function () {
    function QuadrinhosRoutingModule() {
    }
    QuadrinhosRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], QuadrinhosRoutingModule);
    return QuadrinhosRoutingModule;
}());
exports.QuadrinhosRoutingModule = QuadrinhosRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhZHJpbmhvcy5yb3V0aW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicXVhZHJpbmhvcy5yb3V0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUd2RSw0RkFBeUY7QUFFekYsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRTtZQUNwQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLHFEQUF3QixFQUFFO1NBQ2xELEVBQUM7Q0FDSCxDQUFDO0FBTUo7SUFBQTtJQUF1QyxDQUFDO0lBQTNCLHVCQUF1QjtRQUpuQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLHVCQUF1QixDQUFJO0lBQUQsOEJBQUM7Q0FBQSxBQUF4QyxJQUF3QztBQUEzQiwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEF1dGhSb3V0ZUd1YXJkIH0gZnJvbSBcIi4vLi4vYXV0aC9hdXRoLXJvdXRlLmd1YXJkXCI7XG5pbXBvcnQgeyBMaXN0YVF1YWRyaW5ob3NDb21wb25lbnQgfSBmcm9tIFwiLi9saXN0YS1xdWFkcmluaG9zL2xpc3RhLXF1YWRyaW5ob3MuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogJycsIGNoaWxkcmVuOiBbXG4gICAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IExpc3RhUXVhZHJpbmhvc0NvbXBvbmVudCB9LFxuICAgIF19LFxuICBdO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgUXVhZHJpbmhvc1JvdXRpbmdNb2R1bGUgeyB9Il19