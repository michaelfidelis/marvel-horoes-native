"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var _1 = require("./../core/");
var AuthRouteGuard = /** @class */ (function () {
    function AuthRouteGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthRouteGuard.prototype.canActivate = function () {
        var isLogado = this.authService.obterUsuarioLogado() !== undefined;
        if (!isLogado) {
            console.log('isLogado: ', isLogado);
            this.router.navigate(['login']);
        }
        return isLogado;
    };
    AuthRouteGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [_1.AuthService, router_1.Router])
    ], AuthRouteGuard);
    return AuthRouteGuard;
}());
exports.AuthRouteGuard = AuthRouteGuard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1yb3V0ZS5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGgtcm91dGUuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBeUM7QUFDekMsc0NBQTJDO0FBRTNDLCtCQUF5QztBQUd6QztJQUVFLHdCQUFvQixXQUF3QixFQUFVLE1BQWM7UUFBaEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBRXBFLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0UsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLFNBQVMsQ0FBQztRQUVuRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDbEMsQ0FBQztRQUVELE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQWZVLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTt5Q0FHc0IsY0FBVyxFQUFrQixlQUFNO09BRnpELGNBQWMsQ0FnQjFCO0lBQUQscUJBQUM7Q0FBQSxBQWhCRCxJQWdCQztBQWhCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vLi4vY29yZS8nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFJvdXRlR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpe1xuXG4gIH1cblxuICBjYW5BY3RpdmF0ZSgpe1xuICAgIGxldCBpc0xvZ2FkbyA9IHRoaXMuYXV0aFNlcnZpY2Uub2J0ZXJVc3VhcmlvTG9nYWRvKCkgIT09IHVuZGVmaW5lZDtcblxuICAgIGlmICghaXNMb2dhZG8pIHtcbiAgICAgIGNvbnNvbGUubG9nKCdpc0xvZ2FkbzogJywgaXNMb2dhZG8pO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydsb2dpbiddKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNMb2dhZG87XG4gIH1cbn1cbiJdfQ==