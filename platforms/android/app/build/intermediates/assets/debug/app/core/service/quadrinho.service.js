"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var md5_1 = require("ts-md5/dist/md5");
require("rxjs/add/operator/map");
var QuadrinhoService = /** @class */ (function () {
    function QuadrinhoService(http) {
        this.http = http;
        this.PUBLIC_KEY = "dc005bd4fe7429cdfccbcfc756e79b7f";
        this.PRIVATE_KEY = "ec38d937988d5aedbea7b427414388679ec4d6da";
        this.BASE_URL = "https://gateway.marvel.com:443/v1/public";
    }
    QuadrinhoService.prototype.obterQuadrinhos = function (titulo, limit, offset) {
        if (titulo === void 0) { titulo = undefined; }
        if (limit === void 0) { limit = 20; }
        if (offset === void 0) { offset = 0; }
        var timestamp = Date.now();
        var hash = md5_1.Md5.hashStr(timestamp + this.PRIVATE_KEY + this.PUBLIC_KEY).toString();
        return this.http.get(this.BASE_URL + "/comics?titleStartsWith=" + titulo + "&limit=" + limit + "&offset=" + offset + "&ts=" + timestamp + "&hash=" + hash);
    };
    QuadrinhoService.prototype.obterQuadrinho = function (codigo) {
        var timestamp = Date.now();
        var hash = md5_1.Md5.hashStr(timestamp + this.PRIVATE_KEY + this.PUBLIC_KEY).toString();
        return this.http.get(this.BASE_URL + "/comics/" + codigo + "&ts=" + timestamp + "&hash=" + hash).map(function (result) {
            return result.data.count > 0 ? result.data.results[0] : undefined;
        });
    };
    QuadrinhoService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], QuadrinhoService);
    return QuadrinhoService;
}());
exports.QuadrinhoService = QuadrinhoService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhZHJpbmhvLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWFkcmluaG8uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBa0Q7QUFFbEQsdUNBQXFDO0FBR3JDLGlDQUErQjtBQUcvQjtJQU1FLDBCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBSjVCLGVBQVUsR0FBVyxrQ0FBa0MsQ0FBQztRQUN4RCxnQkFBVyxHQUFXLDBDQUEwQyxDQUFDO1FBQ2pFLGFBQVEsR0FBVywwQ0FBMEMsQ0FBQTtJQUU3QixDQUFDO0lBRXpDLDBDQUFlLEdBQWYsVUFBZ0IsTUFBMEIsRUFBRSxLQUFpQixFQUFFLE1BQWtCO1FBQWpFLHVCQUFBLEVBQUEsa0JBQTBCO1FBQUUsc0JBQUEsRUFBQSxVQUFpQjtRQUFFLHVCQUFBLEVBQUEsVUFBa0I7UUFDL0UsSUFBTSxTQUFTLEdBQVcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3JDLElBQU0sSUFBSSxHQUFXLFNBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBZSxJQUFJLENBQUMsUUFBUSxnQ0FBMkIsTUFBTSxlQUFVLEtBQUssZ0JBQVcsTUFBTSxZQUFPLFNBQVMsY0FBUyxJQUFNLENBQUMsQ0FBQztJQUN0SixDQUFDO0lBRUQseUNBQWMsR0FBZCxVQUFlLE1BQWM7UUFDekIsSUFBTSxTQUFTLEdBQVcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3JDLElBQU0sSUFBSSxHQUFXLFNBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBZSxJQUFJLENBQUMsUUFBUSxnQkFBVyxNQUFNLFlBQU8sU0FBUyxjQUFTLElBQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLE1BQU07WUFDeEcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN0RSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFwQlksZ0JBQWdCO1FBRDVCLGlCQUFVLEVBQUU7eUNBT2UsaUJBQVU7T0FOekIsZ0JBQWdCLENBdUI1QjtJQUFELHVCQUFDO0NBQUEsQUF2QkQsSUF1QkM7QUF2QlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgTWQ1IH0gZnJvbSAndHMtbWQ1L2Rpc3QvbWQ1J1xuaW1wb3J0IHsgQ29taWNEYXRhIH0gZnJvbSAnLi4vbW9kZWwvbWFydmVsJztcbmltcG9ydCB7IENvbWljIH0gZnJvbSAnLi4vbW9kZWwvbWFydmVsLyc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBRdWFkcmluaG9TZXJ2aWNlIHtcblxuICBwcml2YXRlIFBVQkxJQ19LRVk6IHN0cmluZyA9IFwiZGMwMDViZDRmZTc0MjljZGZjY2JjZmM3NTZlNzliN2ZcIjtcbiAgcHJpdmF0ZSBQUklWQVRFX0tFWTogc3RyaW5nID0gXCJlYzM4ZDkzNzk4OGQ1YWVkYmVhN2I0Mjc0MTQzODg2NzllYzRkNmRhXCI7XG4gIHByaXZhdGUgQkFTRV9VUkw6IHN0cmluZyA9IFwiaHR0cHM6Ly9nYXRld2F5Lm1hcnZlbC5jb206NDQzL3YxL3B1YmxpY1wiXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICBvYnRlclF1YWRyaW5ob3ModGl0dWxvOiBzdHJpbmcgPSB1bmRlZmluZWQsIGxpbWl0Om51bWJlciA9IDIwLCBvZmZzZXQ6IG51bWJlciA9IDApOiBPYnNlcnZhYmxlPENvbWljRGF0YT4ge1xuICAgIGNvbnN0IHRpbWVzdGFtcDogbnVtYmVyID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBoYXNoOiBzdHJpbmcgPSBNZDUuaGFzaFN0cih0aW1lc3RhbXAgKyB0aGlzLlBSSVZBVEVfS0VZICsgdGhpcy5QVUJMSUNfS0VZKS50b1N0cmluZygpO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PENvbWljRGF0YT4oYCR7dGhpcy5CQVNFX1VSTH0vY29taWNzP3RpdGxlU3RhcnRzV2l0aD0ke3RpdHVsb30mbGltaXQ9JHtsaW1pdH0mb2Zmc2V0PSR7b2Zmc2V0fSZ0cz0ke3RpbWVzdGFtcH0maGFzaD0ke2hhc2h9YCk7XG59XG5cbm9idGVyUXVhZHJpbmhvKGNvZGlnbzogbnVtYmVyKTogT2JzZXJ2YWJsZTxDb21pYz4ge1xuICAgIGNvbnN0IHRpbWVzdGFtcDogbnVtYmVyID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBoYXNoOiBzdHJpbmcgPSBNZDUuaGFzaFN0cih0aW1lc3RhbXAgKyB0aGlzLlBSSVZBVEVfS0VZICsgdGhpcy5QVUJMSUNfS0VZKS50b1N0cmluZygpO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PENvbWljRGF0YT4oYCR7dGhpcy5CQVNFX1VSTH0vY29taWNzLyR7Y29kaWdvfSZ0cz0ke3RpbWVzdGFtcH0maGFzaD0ke2hhc2h9YCkubWFwKHJlc3VsdCA9PiB7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5jb3VudCA+IDAgPyByZXN1bHQuZGF0YS5yZXN1bHRzWzBdIDogdW5kZWZpbmVkO1xuICAgIH0pO1xufVxuXG5cbn0gIl19