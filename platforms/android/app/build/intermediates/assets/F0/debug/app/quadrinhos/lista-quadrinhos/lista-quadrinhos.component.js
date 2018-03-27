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
    ListaQuadrinhosComponent.prototype.obterQuadrinhos = function () {
        this.quadrinhos = this.quadrinhoService.obterQuadrinhos();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGEtcXVhZHJpbmhvcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0YS1xdWFkcmluaG9zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUd6RCxtQ0FBOEM7QUFTOUM7SUFHSSxrQ0FBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDOUQsQ0FBQztJQUVELDJDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsa0RBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzlELENBQUM7SUFaUSx3QkFBd0I7UUFMcEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxtQ0FBbUM7U0FDbkQsQ0FBQzt5Q0FJd0MsdUJBQWdCO09BSDdDLHdCQUF3QixDQWFwQztJQUFELCtCQUFDO0NBQUEsQUFiRCxJQWFDO0FBYlksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbWljLCBDb21pY0RhdGEgfSBmcm9tICcuLy4uLy4uL2NvcmUvbW9kZWwvbWFydmVsLyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFF1YWRyaW5ob1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vY29yZVwiO1xuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgYWxlcnQsIHByb21wdCB9IGZyb20gJ3VpL2RpYWxvZ3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhcHAtbGlzdGEtcXVhZHJpbmhvc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9saXN0YS1xdWFkcmluaG9zLmNvbXBvbmVudC5odG1sXCIsXG59KSBcbmV4cG9ydCBjbGFzcyBMaXN0YVF1YWRyaW5ob3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIFxuICAgIHB1YmxpYyBxdWFkcmluaG9zOiBPYnNlcnZhYmxlPENvbWljRGF0YT47XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBxdWFkcmluaG9TZXJ2aWNlOiBRdWFkcmluaG9TZXJ2aWNlKSB7IFxuICAgICAgICB0aGlzLnF1YWRyaW5ob3MgPSB0aGlzLnF1YWRyaW5ob1NlcnZpY2Uub2J0ZXJRdWFkcmluaG9zKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgb2J0ZXJRdWFkcmluaG9zKCl7XG4gICAgICAgIHRoaXMucXVhZHJpbmhvcyA9IHRoaXMucXVhZHJpbmhvU2VydmljZS5vYnRlclF1YWRyaW5ob3MoKTsgICAgICAgICBcbiAgICB9XG59Il19