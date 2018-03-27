"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var lista_quadrinhos_component_1 = require("./lista-quadrinhos/lista-quadrinhos.component");
var detalhe_quadrinho_component_1 = require("./detalhe-quadrinho/detalhe-quadrinho.component");
var lista_colecao_component_1 = require("./lista-colecao/lista-colecao.component");
var routes = [
    { path: '', children: [
            { path: '', component: lista_quadrinhos_component_1.ListaQuadrinhosComponent },
            { path: 'detalhes', component: detalhe_quadrinho_component_1.DetalheQuadrinhoComponent },
            { path: 'colecao', component: lista_colecao_component_1.ListaColecaoComponent },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhZHJpbmhvcy5yb3V0aW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicXVhZHJpbmhvcy5yb3V0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUd2RSw0RkFBeUY7QUFDekYsK0ZBQTRGO0FBQzVGLG1GQUFnRjtBQUVoRixJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFO1lBQ3BCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUscURBQXdCLEVBQUU7WUFDakQsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSx1REFBeUIsRUFBRTtZQUMxRCxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLCtDQUFxQixFQUFFO1NBRXRELEVBQUM7Q0FDSCxDQUFDO0FBTUo7SUFBQTtJQUF1QyxDQUFDO0lBQTNCLHVCQUF1QjtRQUpuQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLHVCQUF1QixDQUFJO0lBQUQsOEJBQUM7Q0FBQSxBQUF4QyxJQUF3QztBQUEzQiwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEF1dGhSb3V0ZUd1YXJkIH0gZnJvbSBcIi4vLi4vYXV0aC9hdXRoLXJvdXRlLmd1YXJkXCI7XG5pbXBvcnQgeyBMaXN0YVF1YWRyaW5ob3NDb21wb25lbnQgfSBmcm9tIFwiLi9saXN0YS1xdWFkcmluaG9zL2xpc3RhLXF1YWRyaW5ob3MuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBEZXRhbGhlUXVhZHJpbmhvQ29tcG9uZW50IH0gZnJvbSBcIi4vZGV0YWxoZS1xdWFkcmluaG8vZGV0YWxoZS1xdWFkcmluaG8uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMaXN0YUNvbGVjYW9Db21wb25lbnQgfSBmcm9tIFwiLi9saXN0YS1jb2xlY2FvL2xpc3RhLWNvbGVjYW8uY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogJycsIGNoaWxkcmVuOiBbXG4gICAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IExpc3RhUXVhZHJpbmhvc0NvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnZGV0YWxoZXMnLCBjb21wb25lbnQ6IERldGFsaGVRdWFkcmluaG9Db21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ2NvbGVjYW8nLCBjb21wb25lbnQ6IExpc3RhQ29sZWNhb0NvbXBvbmVudCB9LFxuICAgICAgXG4gICAgXX0sXG4gIF07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBRdWFkcmluaG9zUm91dGluZ01vZHVsZSB7IH0iXX0=