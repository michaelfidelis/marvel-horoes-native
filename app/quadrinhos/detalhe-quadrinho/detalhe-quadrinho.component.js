"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("../../core");
var common_1 = require("@angular/common");
var common_2 = require("@angular/common");
var DetalheQuadrinhoComponent = /** @class */ (function () {
    function DetalheQuadrinhoComponent(cacheService, datePipe, colecaoPessoalService, angularLocation) {
        this.cacheService = cacheService;
        this.datePipe = datePipe;
        this.colecaoPessoalService = colecaoPessoalService;
        this.angularLocation = angularLocation;
    }
    DetalheQuadrinhoComponent.prototype.ngOnInit = function () {
        this.quadrinho = this.cacheService.obter('quadrinho-detalhe');
        var favorito = this.colecaoPessoalService.obter(this.quadrinho.id);
        if (favorito) {
            this.quadrinho.isFavorite = true;
        }
    };
    DetalheQuadrinhoComponent.prototype.toDate = function (data) {
        var dataConvertida = new Date(data);
        if (!isNaN(dataConvertida.getDate())) {
            return this.datePipe.transform(dataConvertida, 'dd-MM-yyyy');
        }
        return 'Data inválida';
    };
    DetalheQuadrinhoComponent.prototype.adicionarFavorito = function () {
        this.colecaoPessoalService.adicionar(this.quadrinho);
        this.quadrinho.isFavorite = true;
    };
    DetalheQuadrinhoComponent.prototype.removerFavorito = function () {
        this.colecaoPessoalService.remover(this.quadrinho.id);
        this.quadrinho.isFavorite = false;
    };
    DetalheQuadrinhoComponent.prototype.voltar = function () {
        this.angularLocation.back();
    };
    DetalheQuadrinhoComponent = __decorate([
        core_1.Component({
            selector: "app-detalhe-quadrinho",
            moduleId: module.id,
            templateUrl: "./detalhe-quadrinho.component.html",
            styleUrls: ['./detalhe-quadrinho.component.scss']
        }),
        __metadata("design:paramtypes", [core_2.CacheService,
            common_1.DatePipe,
            core_2.ColecaoPessoalService,
            common_2.Location])
    ], DetalheQuadrinhoComponent);
    return DetalheQuadrinhoComponent;
}());
exports.DetalheQuadrinhoComponent = DetalheQuadrinhoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWxoZS1xdWFkcmluaG8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0YWxoZS1xdWFkcmluaG8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBR3pELG1DQUFtRjtBQUVuRiwwQ0FBMkM7QUFDM0MsMENBQXlDO0FBVXpDO0lBSUksbUNBQ1ksWUFBMEIsRUFDMUIsUUFBa0IsRUFDbEIscUJBQTRDLEVBQzVDLGVBQXlCO1FBSHpCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1QyxvQkFBZSxHQUFmLGVBQWUsQ0FBVTtJQUNyQyxDQUFDO0lBRUQsNENBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUU5RCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkUsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNYLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUNyQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDBDQUFNLEdBQU4sVUFBTyxJQUFZO1FBQ2YsSUFBSSxjQUFjLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDakUsQ0FBQztRQUVELE1BQU0sQ0FBQyxlQUFlLENBQUM7SUFDM0IsQ0FBQztJQUVELHFEQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBRUQsbURBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDdEMsQ0FBQztJQUdELDBDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUEzQ1EseUJBQXlCO1FBUHJDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsb0NBQW9DO1lBQ2pELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO1NBRXBELENBQUM7eUNBTTRCLG1CQUFZO1lBQ2hCLGlCQUFRO1lBQ0ssNEJBQXFCO1lBQzNCLGlCQUFRO09BUjVCLHlCQUF5QixDQTRDckM7SUFBRCxnQ0FBQztDQUFBLEFBNUNELElBNENDO0FBNUNZLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21pYywgQ29taWNEYXRhIH0gZnJvbSAnLi8uLi8uLi9jb3JlL21vZGVsL21hcnZlbC8nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBRdWFkcmluaG9TZXJ2aWNlLCBDb2xlY2FvUGVzc29hbFNlcnZpY2UsIENhY2hlU2VydmljZSB9IGZyb20gXCIuLi8uLi9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7TG9jYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBhbGVydCB9IGZyb20gJ3VpL2RpYWxvZ3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhcHAtZGV0YWxoZS1xdWFkcmluaG9cIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZGV0YWxoZS1xdWFkcmluaG8uY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi9kZXRhbGhlLXF1YWRyaW5oby5jb21wb25lbnQuc2NzcyddXG5cbn0pIFxuZXhwb3J0IGNsYXNzIERldGFsaGVRdWFkcmluaG9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIFxuICAgIHB1YmxpYyBxdWFkcmluaG86IENvbWljO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGNhY2hlU2VydmljZTogQ2FjaGVTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZSxcbiAgICAgICAgcHJpdmF0ZSBjb2xlY2FvUGVzc29hbFNlcnZpY2U6IENvbGVjYW9QZXNzb2FsU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBhbmd1bGFyTG9jYXRpb246IExvY2F0aW9uKSB7IFxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnF1YWRyaW5obyA9IHRoaXMuY2FjaGVTZXJ2aWNlLm9idGVyKCdxdWFkcmluaG8tZGV0YWxoZScpO1xuXG4gICAgICAgIGxldCBmYXZvcml0byA9IHRoaXMuY29sZWNhb1Blc3NvYWxTZXJ2aWNlLm9idGVyKHRoaXMucXVhZHJpbmhvLmlkKTtcbiAgICAgICAgaWYgKGZhdm9yaXRvKSB7XG4gICAgICAgICAgICB0aGlzLnF1YWRyaW5oby5pc0Zhdm9yaXRlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvRGF0ZShkYXRhOiBzdHJpbmcpOnN0cmluZyB7XG4gICAgICAgIGxldCBkYXRhQ29udmVydGlkYSA9IG5ldyBEYXRlKGRhdGEpO1xuXG4gICAgICAgIGlmICghaXNOYU4oZGF0YUNvbnZlcnRpZGEuZ2V0RGF0ZSgpKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKGRhdGFDb252ZXJ0aWRhLCAnZGQtTU0teXl5eScpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICdEYXRhIGludsOhbGlkYSc7XG4gICAgfVxuXG4gICAgYWRpY2lvbmFyRmF2b3JpdG8oKSB7XG4gICAgICAgIHRoaXMuY29sZWNhb1Blc3NvYWxTZXJ2aWNlLmFkaWNpb25hcih0aGlzLnF1YWRyaW5obyk7XG4gICAgICAgIHRoaXMucXVhZHJpbmhvLmlzRmF2b3JpdGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHJlbW92ZXJGYXZvcml0bygpIHtcbiAgICAgICAgdGhpcy5jb2xlY2FvUGVzc29hbFNlcnZpY2UucmVtb3Zlcih0aGlzLnF1YWRyaW5oby5pZCk7XG4gICAgICAgIHRoaXMucXVhZHJpbmhvLmlzRmF2b3JpdGUgPSBmYWxzZTtcbiAgICB9XG5cblxuICAgIHZvbHRhcigpIHtcbiAgICAgICAgdGhpcy5hbmd1bGFyTG9jYXRpb24uYmFjaygpO1xuICAgIH1cbn0iXX0=