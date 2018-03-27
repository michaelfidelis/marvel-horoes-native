"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var storage = require("application-settings");
var ColecaoPessoalService = /** @class */ (function () {
    function ColecaoPessoalService() {
    }
    ColecaoPessoalService.prototype.adicionar = function (quadrinho) {
        var quadrinhos = JSON.parse(storage.getString('colecao-pessoal') || '[]');
        quadrinhos.push(quadrinho);
        storage.setString('colecao-pessoal', JSON.stringify(quadrinhos));
    };
    ColecaoPessoalService.prototype.remover = function (codigoQuadrinho) {
        var quadrinhos = JSON.parse(storage.getString('colecao-pessoal') || '[]');
        var quadrinhosAtualizados = quadrinhos.filter(function (quadrinho) { return quadrinho.id !== codigoQuadrinho; });
        storage.setString('colecao-pessoal', JSON.stringify(quadrinhosAtualizados));
    };
    ColecaoPessoalService.prototype.listar = function () {
        return JSON.parse(storage.getString('colecao-pessoal') || '[]');
    };
    ColecaoPessoalService.prototype.obter = function (codigoQuadrinho) {
        var quadrinhos = JSON.parse(storage.getString('colecao-pessoal') || '[]');
        var quadrinhoEncontrado = quadrinhos.find(function (quadrinho) { return quadrinho.id === codigoQuadrinho; });
        return quadrinhos.find(function (quadrinho) { return quadrinho.id === codigoQuadrinho; });
    };
    ColecaoPessoalService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ColecaoPessoalService);
    return ColecaoPessoalService;
}());
exports.ColecaoPessoalService = ColecaoPessoalService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sZWNhby1wZXNzb2FsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb2xlY2FvLXBlc3NvYWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUEyQztBQUMzQyw4Q0FBZ0Q7QUFHaEQ7SUFFRTtJQUFnQixDQUFDO0lBRWpCLHlDQUFTLEdBQVQsVUFBVSxTQUFnQjtRQUN4QixJQUFJLFVBQVUsR0FBWSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUNuRixVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCx1Q0FBTyxHQUFQLFVBQVEsZUFBdUI7UUFDN0IsSUFBSSxVQUFVLEdBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7UUFDbkYsSUFBSSxxQkFBcUIsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsU0FBUyxDQUFDLEVBQUUsS0FBSyxlQUFlLEVBQWhDLENBQWdDLENBQUMsQ0FBQztRQUM3RixPQUFPLENBQUMsU0FBUyxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRCxzQ0FBTSxHQUFOO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxxQ0FBSyxHQUFMLFVBQU0sZUFBdUI7UUFDM0IsSUFBSSxVQUFVLEdBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7UUFDbkYsSUFBSSxtQkFBbUIsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsU0FBUyxDQUFDLEVBQUUsS0FBSyxlQUFlLEVBQWhDLENBQWdDLENBQUMsQ0FBQztRQUN6RixNQUFNLENBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFBLFNBQVMsSUFBSSxPQUFBLFNBQVMsQ0FBQyxFQUFFLEtBQUssZUFBZSxFQUFoQyxDQUFnQyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQXhCVSxxQkFBcUI7UUFEakMsaUJBQVUsRUFBRTs7T0FDQSxxQkFBcUIsQ0F5QmpDO0lBQUQsNEJBQUM7Q0FBQSxBQXpCRCxJQXlCQztBQXpCWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21pYyB9IGZyb20gJy4vLi4vbW9kZWwvbWFydmVsL21hcnZlbC1tb2RlbHMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgc3RvcmFnZSBmcm9tICdhcHBsaWNhdGlvbi1zZXR0aW5ncyc7XG4gXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29sZWNhb1Blc3NvYWxTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGFkaWNpb25hcihxdWFkcmluaG86IENvbWljKSB7XG4gICAgbGV0IHF1YWRyaW5ob3M6IENvbWljW10gPSBKU09OLnBhcnNlKHN0b3JhZ2UuZ2V0U3RyaW5nKCdjb2xlY2FvLXBlc3NvYWwnKSB8fCAnW10nKTtcbiAgICBxdWFkcmluaG9zLnB1c2gocXVhZHJpbmhvKTtcbiAgICBzdG9yYWdlLnNldFN0cmluZygnY29sZWNhby1wZXNzb2FsJywgSlNPTi5zdHJpbmdpZnkocXVhZHJpbmhvcykpO1xuICB9XG5cbiAgcmVtb3Zlcihjb2RpZ29RdWFkcmluaG86IG51bWJlcikge1xuICAgIGxldCBxdWFkcmluaG9zOiBDb21pY1tdID0gSlNPTi5wYXJzZShzdG9yYWdlLmdldFN0cmluZygnY29sZWNhby1wZXNzb2FsJykgfHwgJ1tdJyk7XG4gICAgbGV0IHF1YWRyaW5ob3NBdHVhbGl6YWRvcyA9IHF1YWRyaW5ob3MuZmlsdGVyKHF1YWRyaW5obyA9PiBxdWFkcmluaG8uaWQgIT09IGNvZGlnb1F1YWRyaW5obyk7XG4gICAgc3RvcmFnZS5zZXRTdHJpbmcoJ2NvbGVjYW8tcGVzc29hbCcsIEpTT04uc3RyaW5naWZ5KHF1YWRyaW5ob3NBdHVhbGl6YWRvcykpO1xuICB9XG5cbiAgbGlzdGFyKCk6IENvbWljW10ge1xuICAgIHJldHVybiBKU09OLnBhcnNlKHN0b3JhZ2UuZ2V0U3RyaW5nKCdjb2xlY2FvLXBlc3NvYWwnKSB8fCAnW10nKTtcbiAgfVxuXG4gIG9idGVyKGNvZGlnb1F1YWRyaW5obzogbnVtYmVyKTogQ29taWMge1xuICAgIGxldCBxdWFkcmluaG9zOiBDb21pY1tdID0gSlNPTi5wYXJzZShzdG9yYWdlLmdldFN0cmluZygnY29sZWNhby1wZXNzb2FsJykgfHwgJ1tdJyk7XG4gICAgbGV0IHF1YWRyaW5ob0VuY29udHJhZG8gPSBxdWFkcmluaG9zLmZpbmQocXVhZHJpbmhvID0+IHF1YWRyaW5oby5pZCA9PT0gY29kaWdvUXVhZHJpbmhvKTtcbiAgICByZXR1cm4gIHF1YWRyaW5ob3MuZmluZChxdWFkcmluaG8gPT4gcXVhZHJpbmhvLmlkID09PSBjb2RpZ29RdWFkcmluaG8pO1xuICB9XG59XG4iXX0=