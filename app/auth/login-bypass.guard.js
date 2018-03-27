"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var _1 = require("./../core/");
var LoginBypassRouteGuard = /** @class */ (function () {
    function LoginBypassRouteGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginBypassRouteGuard.prototype.canActivate = function () {
        var isLogado = this.authService.obterUsuarioLogado() != undefined;
        if (isLogado) {
            this.router.navigate(['/items']);
        }
        return isLogado;
    };
    LoginBypassRouteGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [_1.AuthService, router_1.Router])
    ], LoginBypassRouteGuard);
    return LoginBypassRouteGuard;
}());
exports.LoginBypassRouteGuard = LoginBypassRouteGuard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tYnlwYXNzLmd1YXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4tYnlwYXNzLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMENBQXlDO0FBQ3pDLHNDQUEyQztBQUUzQywrQkFBeUM7QUFHekM7SUFFRSwrQkFBb0IsV0FBd0IsRUFBVSxNQUFjO1FBQWhELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUVwRSxDQUFDO0lBRUQsMkNBQVcsR0FBWDtRQUNFLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxTQUFTLENBQUM7UUFFbEUsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNuQyxDQUFDO1FBRUQsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBZFUscUJBQXFCO1FBRGpDLGlCQUFVLEVBQUU7eUNBR3NCLGNBQVcsRUFBa0IsZUFBTTtPQUZ6RCxxQkFBcUIsQ0FlakM7SUFBRCw0QkFBQztDQUFBLEFBZkQsSUFlQztBQWZZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vLi4vY29yZS8nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9naW5CeXBhc3NSb3V0ZUd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKXtcblxuICB9XG5cbiAgY2FuQWN0aXZhdGUoKXtcbiAgICBsZXQgaXNMb2dhZG8gPSB0aGlzLmF1dGhTZXJ2aWNlLm9idGVyVXN1YXJpb0xvZ2FkbygpICE9IHVuZGVmaW5lZDtcblxuICAgIGlmIChpc0xvZ2Fkbykge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaXRlbXMnXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzTG9nYWRvO1xuICB9XG59XG4iXX0=