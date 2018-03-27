"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var core_2 = require("./../core");
var shared_module_1 = require("./../shared/shared.module");
var lista_quadrinhos_component_1 = require("./lista-quadrinhos/lista-quadrinhos.component");
var quadrinhos_routing_1 = require("./quadrinhos.routing");
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
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], QuadrinhosModule);
    return QuadrinhosModule;
}());
exports.QuadrinhosModule = QuadrinhosModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhZHJpbmhvcy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWFkcmluaG9zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsa0NBQXVDO0FBQ3ZDLDJEQUF3RDtBQUd4RCw0RkFBeUY7QUFDekYsMkRBQStEO0FBZ0IvRDtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBZDVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLGlCQUFVO2dCQUNWLDRCQUFZO2dCQUNaLDRDQUF1QjthQUMxQjtZQUNELFlBQVksRUFBRTtnQkFDVixxREFBd0I7YUFDM0I7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnLi8uLi9jb3JlJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZX0gZnJvbSAnLi8uLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBDb21pY0xpc3RDb21wb25lbnQgfSBmcm9tIFwiLi4vc2hhcmVkL2NvbWljLWxpc3QvY29taWMtbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IENvbWljRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4uL3NoYXJlZC9jb21pYy1kZXRhaWwvY29taWMtZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTGlzdGFRdWFkcmluaG9zQ29tcG9uZW50IH0gZnJvbSBcIi4vbGlzdGEtcXVhZHJpbmhvcy9saXN0YS1xdWFkcmluaG9zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUXVhZHJpbmhvc1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9xdWFkcmluaG9zLnJvdXRpbmdcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgQ29yZU1vZHVsZSxcbiAgICAgICAgU2hhcmVkTW9kdWxlLFxuICAgICAgICBRdWFkcmluaG9zUm91dGluZ01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIExpc3RhUXVhZHJpbmhvc0NvbXBvbmVudCxcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUXVhZHJpbmhvc01vZHVsZSB7IH1cbiJdfQ==