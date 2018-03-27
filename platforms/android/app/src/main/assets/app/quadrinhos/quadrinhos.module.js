"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var core_2 = require("./../core");
var shared_module_1 = require("./../shared/shared.module");
var lista_quadrinhos_component_1 = require("./lista-quadrinhos/lista-quadrinhos.component");
var detalhe_quadrinho_component_1 = require("./detalhe-quadrinho/detalhe-quadrinho.component");
var quadrinhos_routing_1 = require("./quadrinhos.routing");
var lista_colecao_component_1 = require("./lista-colecao/lista-colecao.component");
var QuadrinhosModule = /** @class */ (function () {
    function QuadrinhosModule() {
    }
    QuadrinhosModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                core_2.CoreModule,
                shared_module_1.SharedModule,
                quadrinhos_routing_1.QuadrinhosRoutingModule
            ],
            declarations: [
                lista_quadrinhos_component_1.ListaQuadrinhosComponent,
                detalhe_quadrinho_component_1.DetalheQuadrinhoComponent,
                lista_colecao_component_1.ListaColecaoComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], QuadrinhosModule);
    return QuadrinhosModule;
}());
exports.QuadrinhosModule = QuadrinhosModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhZHJpbmhvcy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWFkcmluaG9zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsa0NBQXVDO0FBQ3ZDLDJEQUF3RDtBQUV4RCw0RkFBeUY7QUFDekYsK0ZBQTRGO0FBQzVGLDJEQUErRDtBQUMvRCxtRkFBZ0Y7QUFrQmhGO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFoQjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLGlCQUFVO2dCQUNWLDRCQUFZO2dCQUNaLDRDQUF1QjthQUMxQjtZQUNELFlBQVksRUFBRTtnQkFDVixxREFBd0I7Z0JBQ3hCLHVEQUF5QjtnQkFDekIsK0NBQXFCO2FBQ3hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJy4vLi4vY29yZSc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGV9IGZyb20gJy4vLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgQ29taWNMaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4uL3NoYXJlZC9jb21pYy1saXN0L2NvbWljLWxpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMaXN0YVF1YWRyaW5ob3NDb21wb25lbnQgfSBmcm9tIFwiLi9saXN0YS1xdWFkcmluaG9zL2xpc3RhLXF1YWRyaW5ob3MuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBEZXRhbGhlUXVhZHJpbmhvQ29tcG9uZW50IH0gZnJvbSBcIi4vZGV0YWxoZS1xdWFkcmluaG8vZGV0YWxoZS1xdWFkcmluaG8uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBRdWFkcmluaG9zUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3F1YWRyaW5ob3Mucm91dGluZ1wiO1xuaW1wb3J0IHsgTGlzdGFDb2xlY2FvQ29tcG9uZW50IH0gZnJvbSBcIi4vbGlzdGEtY29sZWNhby9saXN0YS1jb2xlY2FvLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBDb3JlTW9kdWxlLFxuICAgICAgICBTaGFyZWRNb2R1bGUsXG4gICAgICAgIFF1YWRyaW5ob3NSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgTGlzdGFRdWFkcmluaG9zQ29tcG9uZW50LFxuICAgICAgICBEZXRhbGhlUXVhZHJpbmhvQ29tcG9uZW50LFxuICAgICAgICBMaXN0YUNvbGVjYW9Db21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUXVhZHJpbmhvc01vZHVsZSB7IH1cbiJdfQ==