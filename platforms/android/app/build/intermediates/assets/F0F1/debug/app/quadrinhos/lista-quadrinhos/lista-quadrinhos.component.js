"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("../../core");
var ListaQuadrinhosComponent = /** @class */ (function () {
    function ListaQuadrinhosComponent(quadrinhoService) {
        this.quadrinhoService = quadrinhoService;
        this.quadrinhos = this.quadrinhoService.obterQuadrinhos();
    }
    ListaQuadrinhosComponent.prototype.ngOnInit = function () {
    };
    ListaQuadrinhosComponent.prototype.obterQuadrinhos = function (titulo) {
        if (titulo === void 0) { titulo = undefined; }
        this.quadrinhos = this.quadrinhoService.obterQuadrinhos(titulo);
    };
    ListaQuadrinhosComponent = __decorate([
        core_1.Component({
            selector: "app-lista-quadrinhos",
            moduleId: module.id,
            templateUrl: "./lista-quadrinhos.component.html",
        }),
        __metadata("design:paramtypes", [core_2.QuadrinhoService])
    ], ListaQuadrinhosComponent);
    return ListaQuadrinhosComponent;
}());
exports.ListaQuadrinhosComponent = ListaQuadrinhosComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGEtcXVhZHJpbmhvcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0YS1xdWFkcmluaG9zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUd6RCxtQ0FBOEM7QUFTOUM7SUFJSSxrQ0FBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDOUQsQ0FBQztJQUVELDJDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsa0RBQWUsR0FBZixVQUFnQixNQUEwQjtRQUExQix1QkFBQSxFQUFBLGtCQUEwQjtRQUN0QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQWJRLHdCQUF3QjtRQUxwQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLG1DQUFtQztTQUNuRCxDQUFDO3lDQUt3Qyx1QkFBZ0I7T0FKN0Msd0JBQXdCLENBY3BDO0lBQUQsK0JBQUM7Q0FBQSxBQWRELElBY0M7QUFkWSw0REFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29taWMsIENvbWljRGF0YSB9IGZyb20gJy4vLi4vLi4vY29yZS9tb2RlbC9tYXJ2ZWwvJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgUXVhZHJpbmhvU2VydmljZSB9IGZyb20gXCIuLi8uLi9jb3JlXCI7XG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBhbGVydCwgcHJvbXB0IH0gZnJvbSAndWkvZGlhbG9ncyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImFwcC1saXN0YS1xdWFkcmluaG9zXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xpc3RhLXF1YWRyaW5ob3MuY29tcG9uZW50Lmh0bWxcIixcbn0pIFxuZXhwb3J0IGNsYXNzIExpc3RhUXVhZHJpbmhvc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgXG4gICAgcHVibGljIHF1YWRyaW5ob3M6IE9ic2VydmFibGU8Q29taWNEYXRhPjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcXVhZHJpbmhvU2VydmljZTogUXVhZHJpbmhvU2VydmljZSkgeyBcbiAgICAgICAgdGhpcy5xdWFkcmluaG9zID0gdGhpcy5xdWFkcmluaG9TZXJ2aWNlLm9idGVyUXVhZHJpbmhvcygpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIG9idGVyUXVhZHJpbmhvcyh0aXR1bG86IHN0cmluZyA9IHVuZGVmaW5lZCl7XG4gICAgICAgIHRoaXMucXVhZHJpbmhvcyA9IHRoaXMucXVhZHJpbmhvU2VydmljZS5vYnRlclF1YWRyaW5ob3ModGl0dWxvKTsgICAgICAgICBcbiAgICB9XG59Il19