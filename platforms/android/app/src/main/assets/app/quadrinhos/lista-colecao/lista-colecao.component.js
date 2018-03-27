"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("../../core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var ListaColecaoComponent = /** @class */ (function () {
    function ListaColecaoComponent(router, colecaoPessoalService, cacheService, angularLocation) {
        this.router = router;
        this.colecaoPessoalService = colecaoPessoalService;
        this.cacheService = cacheService;
        this.angularLocation = angularLocation;
    }
    ListaColecaoComponent.prototype.ngOnInit = function () {
        this.quadrinhos = this.obterQuadrinhos();
    };
    ListaColecaoComponent.prototype.verDetalhes = function (quadrinho) {
        this.cacheService.adicionar('quadrinho-detalhe', quadrinho);
        this.router.navigate(['/quadrinhos/detalhes']);
    };
    ListaColecaoComponent.prototype.obterQuadrinhos = function () {
        return this.colecaoPessoalService.listar();
    };
    ListaColecaoComponent.prototype.buscar = function (titulo) {
        this.quadrinhos = this.obterQuadrinhos().filter(function (quadrinho) { return quadrinho.title.toLowerCase().search(titulo.toLowerCase()) != -1; });
    };
    ListaColecaoComponent.prototype.voltar = function () {
        this.angularLocation.back();
    };
    ListaColecaoComponent = __decorate([
        core_1.Component({
            selector: 'app-lista-colecao',
            moduleId: module.id,
            templateUrl: './lista-colecao.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            core_2.ColecaoPessoalService,
            core_2.CacheService,
            common_1.Location])
    ], ListaColecaoComponent);
    return ListaColecaoComponent;
}());
exports.ListaColecaoComponent = ListaColecaoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGEtY29sZWNhby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0YS1jb2xlY2FvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUV6RCxtQ0FBaUU7QUFDakUsMENBQXlDO0FBQ3pDLDBDQUEyQztBQU8zQztJQUlJLCtCQUNZLE1BQWMsRUFDZCxxQkFBNEMsRUFDNUMsWUFBMEIsRUFDMUIsZUFBeUI7UUFIekIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsb0JBQWUsR0FBZixlQUFlLENBQVU7SUFDbEMsQ0FBQztJQUVKLHdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQsMkNBQVcsR0FBWCxVQUFZLFNBQWdCO1FBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCwrQ0FBZSxHQUFmO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBRUQsc0NBQU0sR0FBTixVQUFPLE1BQWM7UUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsU0FBUyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQWhFLENBQWdFLENBQUMsQ0FBQztJQUNuSSxDQUFDO0lBRUQsc0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQTlCUSxxQkFBcUI7UUFMakMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxnQ0FBZ0M7U0FDaEQsQ0FBQzt5Q0FNc0IsZUFBTTtZQUNTLDRCQUFxQjtZQUM5QixtQkFBWTtZQUNULGlCQUFRO09BUjVCLHFCQUFxQixDQStCakM7SUFBRCw0QkFBQztDQUFBLEFBL0JELElBK0JDO0FBL0JZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29taWMgfSBmcm9tICcuLy4uLy4uL2NvcmUvbW9kZWwvbWFydmVsLyc7XG5pbXBvcnQgeyBDb2xlY2FvUGVzc29hbFNlcnZpY2UsIENhY2hlU2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7IFxuICAgIHNlbGVjdG9yOiAnYXBwLWxpc3RhLWNvbGVjYW8nLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xpc3RhLWNvbGVjYW8uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIExpc3RhQ29sZWNhb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgXG4gICAgcHVibGljIHF1YWRyaW5ob3M6IENvbWljW107XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBjb2xlY2FvUGVzc29hbFNlcnZpY2U6IENvbGVjYW9QZXNzb2FsU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBjYWNoZVNlcnZpY2U6IENhY2hlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBhbmd1bGFyTG9jYXRpb246IExvY2F0aW9uXG4gICAgKSB7fVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucXVhZHJpbmhvcyA9IHRoaXMub2J0ZXJRdWFkcmluaG9zKCk7XG4gICAgfVxuXG4gICAgdmVyRGV0YWxoZXMocXVhZHJpbmhvOiBDb21pYykge1xuICAgICAgICB0aGlzLmNhY2hlU2VydmljZS5hZGljaW9uYXIoJ3F1YWRyaW5oby1kZXRhbGhlJywgcXVhZHJpbmhvKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcXVhZHJpbmhvcy9kZXRhbGhlcyddKTtcbiAgICB9XG5cbiAgICBvYnRlclF1YWRyaW5ob3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGVjYW9QZXNzb2FsU2VydmljZS5saXN0YXIoKTtcbiAgICB9IFxuICAgIFxuICAgIGJ1c2Nhcih0aXR1bG86IHN0cmluZyl7XG4gICAgICAgIHRoaXMucXVhZHJpbmhvcyA9IHRoaXMub2J0ZXJRdWFkcmluaG9zKCkuZmlsdGVyKHF1YWRyaW5obyA9PiBxdWFkcmluaG8udGl0bGUudG9Mb3dlckNhc2UoKS5zZWFyY2godGl0dWxvLnRvTG93ZXJDYXNlKCkpICE9IC0xKTtcbiAgICB9XG5cbiAgICB2b2x0YXIoKSB7XG4gICAgICAgIHRoaXMuYW5ndWxhckxvY2F0aW9uLmJhY2soKTtcbiAgICB9XG59XG4iXX0=