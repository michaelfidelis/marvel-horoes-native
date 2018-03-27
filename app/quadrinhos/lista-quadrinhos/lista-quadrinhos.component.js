"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("../../core");
var dialogs_1 = require("ui/dialogs");
var router_1 = require("@angular/router");
var ListaQuadrinhosComponent = /** @class */ (function () {
    function ListaQuadrinhosComponent(router, quadrinhoService, colecaoPessoalService, cacheService, auth) {
        this.router = router;
        this.quadrinhoService = quadrinhoService;
        this.colecaoPessoalService = colecaoPessoalService;
        this.cacheService = cacheService;
        this.auth = auth;
        this.quadrinhos = this.quadrinhoService.obterQuadrinhos();
    }
    ListaQuadrinhosComponent.prototype.ngOnInit = function () {
    };
    ListaQuadrinhosComponent.prototype.obterQuadrinhos = function (titulo) {
        if (titulo === void 0) { titulo = undefined; }
        this.quadrinhos = this.quadrinhoService.obterQuadrinhos(titulo);
    };
    ListaQuadrinhosComponent.prototype.adicionarFavorito = function (quadrinho) {
        var _this = this;
        dialogs_1.confirm({
            title: "Quadrinho",
            message: "Adicionar na coleção?",
            okButtonText: "Sim",
            cancelButtonText: "Não",
        }).then(function (result) {
            if (result) {
                _this.colecaoPessoalService.adicionar(quadrinho);
                dialogs_1.alert({
                    title: 'Quadrinhos',
                    okButtonText: 'OK',
                    message: 'Quadrinho adicionado na coleção!'
                });
            }
        });
    };
    ListaQuadrinhosComponent.prototype.verDetalhes = function (quadrinho) {
        this.cacheService.adicionar('quadrinho-detalhe', quadrinho);
        this.router.navigate(['/quadrinhos/detalhes']);
    };
    ListaQuadrinhosComponent.prototype.verColecao = function () {
        this.router.navigate(['/quadrinhos/colecao']);
    };
    ListaQuadrinhosComponent.prototype.logout = function () {
        this.auth.logout();
    };
    ListaQuadrinhosComponent = __decorate([
        core_1.Component({
            selector: "app-lista-quadrinhos",
            moduleId: module.id,
            templateUrl: "./lista-quadrinhos.component.html",
        }),
        __metadata("design:paramtypes", [router_1.Router,
            core_2.QuadrinhoService,
            core_2.ColecaoPessoalService,
            core_2.CacheService,
            core_2.AuthService])
    ], ListaQuadrinhosComponent);
    return ListaQuadrinhosComponent;
}());
exports.ListaQuadrinhosComponent = ListaQuadrinhosComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGEtcXVhZHJpbmhvcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0YS1xdWFkcmluaG9zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUd6RCxtQ0FBZ0c7QUFFaEcsc0NBQW1EO0FBQ25ELDBDQUF5QztBQU96QztJQUlJLGtDQUNZLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMscUJBQTRDLEVBQzVDLFlBQTBCLEVBQzFCLElBQWlCO1FBSmpCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUM5RCxDQUFDO0lBRUQsMkNBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxrREFBZSxHQUFmLFVBQWdCLE1BQTBCO1FBQTFCLHVCQUFBLEVBQUEsa0JBQTBCO1FBQ3RDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsb0RBQWlCLEdBQWpCLFVBQWtCLFNBQWdCO1FBQWxDLGlCQWdCQztRQWZHLGlCQUFPLENBQUM7WUFDSixLQUFLLEVBQUUsV0FBVztZQUNsQixPQUFPLEVBQUUsdUJBQXVCO1lBQ2hDLFlBQVksRUFBRSxLQUFLO1lBQ25CLGdCQUFnQixFQUFFLEtBQUs7U0FDMUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQWU7WUFDcEIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDVCxLQUFJLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNoRCxlQUFLLENBQUM7b0JBQ0YsS0FBSyxFQUFFLFlBQVk7b0JBQ25CLFlBQVksRUFBRSxJQUFJO29CQUNsQixPQUFPLEVBQUUsa0NBQWtDO2lCQUM5QyxDQUFDLENBQUM7WUFDUCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsOENBQVcsR0FBWCxVQUFZLFNBQWdCO1FBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCw2Q0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELHlDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFqRFEsd0JBQXdCO1FBTHBDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsbUNBQW1DO1NBQ25ELENBQUM7eUNBTXNCLGVBQU07WUFDSSx1QkFBZ0I7WUFDWCw0QkFBcUI7WUFDOUIsbUJBQVk7WUFDcEIsa0JBQVc7T0FUcEIsd0JBQXdCLENBa0RwQztJQUFELCtCQUFDO0NBQUEsQUFsREQsSUFrREM7QUFsRFksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbWljLCBDb21pY0RhdGEgfSBmcm9tICcuLy4uLy4uL2NvcmUvbW9kZWwvbWFydmVsLyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFF1YWRyaW5ob1NlcnZpY2UsIENvbGVjYW9QZXNzb2FsU2VydmljZSwgQ2FjaGVTZXJ2aWNlLCBBdXRoU2VydmljZSB9IGZyb20gXCIuLi8uLi9jb3JlXCI7XG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBhbGVydCwgcHJvbXB0LCBjb25maXJtfSBmcm9tICd1aS9kaWFsb2dzJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiYXBwLWxpc3RhLXF1YWRyaW5ob3NcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbGlzdGEtcXVhZHJpbmhvcy5jb21wb25lbnQuaHRtbFwiLFxufSkgXG5leHBvcnQgY2xhc3MgTGlzdGFRdWFkcmluaG9zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBcbiAgICBwdWJsaWMgcXVhZHJpbmhvczogT2JzZXJ2YWJsZTxDb21pY0RhdGE+O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgcXVhZHJpbmhvU2VydmljZTogUXVhZHJpbmhvU2VydmljZSwgXG4gICAgICAgIHByaXZhdGUgY29sZWNhb1Blc3NvYWxTZXJ2aWNlOiBDb2xlY2FvUGVzc29hbFNlcnZpY2UsIFxuICAgICAgICBwcml2YXRlIGNhY2hlU2VydmljZTogQ2FjaGVTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGF1dGg6IEF1dGhTZXJ2aWNlKSB7IFxuICAgICAgICB0aGlzLnF1YWRyaW5ob3MgPSB0aGlzLnF1YWRyaW5ob1NlcnZpY2Uub2J0ZXJRdWFkcmluaG9zKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgb2J0ZXJRdWFkcmluaG9zKHRpdHVsbzogc3RyaW5nID0gdW5kZWZpbmVkKXtcbiAgICAgICAgdGhpcy5xdWFkcmluaG9zID0gdGhpcy5xdWFkcmluaG9TZXJ2aWNlLm9idGVyUXVhZHJpbmhvcyh0aXR1bG8pOyAgICAgICAgIFxuICAgIH1cblxuICAgIGFkaWNpb25hckZhdm9yaXRvKHF1YWRyaW5obzogQ29taWMpIHtcbiAgICAgICAgY29uZmlybSh7XG4gICAgICAgICAgICB0aXRsZTogXCJRdWFkcmluaG9cIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQWRpY2lvbmFyIG5hIGNvbGXDp8Ojbz9cIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJTaW1cIixcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTsOjb1wiLFxuICAgICAgICB9KS50aGVuKChyZXN1bHQ6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGVjYW9QZXNzb2FsU2VydmljZS5hZGljaW9uYXIocXVhZHJpbmhvKTtcbiAgICAgICAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnUXVhZHJpbmhvcycsXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1F1YWRyaW5obyBhZGljaW9uYWRvIG5hIGNvbGXDp8OjbyEnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZlckRldGFsaGVzKHF1YWRyaW5obzogQ29taWMpIHtcbiAgICAgICAgdGhpcy5jYWNoZVNlcnZpY2UuYWRpY2lvbmFyKCdxdWFkcmluaG8tZGV0YWxoZScsIHF1YWRyaW5obyk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3F1YWRyaW5ob3MvZGV0YWxoZXMnXSk7XG4gICAgfVxuXG4gICAgdmVyQ29sZWNhbygpe1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9xdWFkcmluaG9zL2NvbGVjYW8nXSk7ICAgICAgICBcbiAgICB9XG5cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIHRoaXMuYXV0aC5sb2dvdXQoKTtcbiAgICB9XG59Il19