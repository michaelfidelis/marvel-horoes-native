"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var storage = require("application-settings");
var CacheService = /** @class */ (function () {
    function CacheService() {
    }
    CacheService.prototype.adicionar = function (chave, valor) {
        var cache = JSON.parse(storage.getString('cache') || '{}');
        cache[chave] = valor;
        storage.setString('cache', JSON.stringify(cache));
    };
    CacheService.prototype.remover = function (chave) {
        var cache = JSON.parse(storage.getString('cache') || '{}');
        delete cache[chave];
        storage.setString('cache', JSON.stringify(cache));
    };
    CacheService.prototype.obter = function (chave) {
        var cache = JSON.parse(storage.getString('cache') || '{}');
        return cache[chave];
    };
    CacheService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CacheService);
    return CacheService;
}());
exports.CacheService = CacheService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhY2hlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsOENBQWdEO0FBR2hEO0lBRUU7SUFBZ0IsQ0FBQztJQUVqQixnQ0FBUyxHQUFULFVBQVUsS0FBWSxFQUFFLEtBQVU7UUFDaEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO1FBQzNELEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDckIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCw4QkFBTyxHQUFQLFVBQVEsS0FBYTtRQUNuQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7UUFDM0QsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCw0QkFBSyxHQUFMLFVBQU0sS0FBYTtRQUNqQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7UUFDM0QsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBbkJVLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTs7T0FDQSxZQUFZLENBb0J4QjtJQUFELG1CQUFDO0NBQUEsQUFwQkQsSUFvQkM7QUFwQlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBzdG9yYWdlIGZyb20gJ2FwcGxpY2F0aW9uLXNldHRpbmdzJztcbiBcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYWNoZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgYWRpY2lvbmFyKGNoYXZlOnN0cmluZywgdmFsb3I6IGFueSkge1xuICAgIGxldCBjYWNoZSA9IEpTT04ucGFyc2Uoc3RvcmFnZS5nZXRTdHJpbmcoJ2NhY2hlJykgfHwgJ3t9Jyk7XG4gICAgY2FjaGVbY2hhdmVdID0gdmFsb3I7XG4gICAgc3RvcmFnZS5zZXRTdHJpbmcoJ2NhY2hlJywgSlNPTi5zdHJpbmdpZnkoY2FjaGUpKTtcbiAgfVxuXG4gIHJlbW92ZXIoY2hhdmU6IHN0cmluZykge1xuICAgIGxldCBjYWNoZSA9IEpTT04ucGFyc2Uoc3RvcmFnZS5nZXRTdHJpbmcoJ2NhY2hlJykgfHwgJ3t9Jyk7XG4gICAgZGVsZXRlIGNhY2hlW2NoYXZlXTtcbiAgICBzdG9yYWdlLnNldFN0cmluZygnY2FjaGUnLCBKU09OLnN0cmluZ2lmeShjYWNoZSkpO1xuICB9XG5cbiAgb2J0ZXIoY2hhdmU6IHN0cmluZyk6IGFueSB7XG4gICAgbGV0IGNhY2hlID0gSlNPTi5wYXJzZShzdG9yYWdlLmdldFN0cmluZygnY2FjaGUnKSB8fCAne30nKTtcbiAgICByZXR1cm4gY2FjaGVbY2hhdmVdO1xuICB9XG59XG4gIl19