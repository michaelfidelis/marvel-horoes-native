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
        var isLogado = this.authService.obterUsuarioLogado() != undefined;
        if (!isLogado) {
            this.router.navigate(['/auth']);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1yb3V0ZS5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGgtcm91dGUuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBeUM7QUFDekMsc0NBQTJDO0FBRTNDLCtCQUF5QztBQUd6QztJQUVFLHdCQUFvQixXQUF3QixFQUFVLE1BQWM7UUFBaEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBRXBFLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0UsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLFNBQVMsQ0FBQztRQUVsRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDbEMsQ0FBQztRQUVELE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQWRVLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTt5Q0FHc0IsY0FBVyxFQUFrQixlQUFNO09BRnpELGNBQWMsQ0FlMUI7SUFBRCxxQkFBQztDQUFBLEFBZkQsSUFlQztBQWZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi8uLi9jb3JlLyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoUm91dGVHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcil7XG5cbiAgfVxuXG4gIGNhbkFjdGl2YXRlKCl7XG4gICAgbGV0IGlzTG9nYWRvID0gdGhpcy5hdXRoU2VydmljZS5vYnRlclVzdWFyaW9Mb2dhZG8oKSAhPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAoIWlzTG9nYWRvKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hdXRoJ10pO1xuICAgIH1cblxuICAgIHJldHVybiBpc0xvZ2FkbztcbiAgfVxufVxuICAiXX0=