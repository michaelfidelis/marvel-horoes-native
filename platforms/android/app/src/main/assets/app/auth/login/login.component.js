"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var model_1 = require("../../core/model");
var core_2 = require("../../core");
var page_1 = require("ui/page");
var dialogs_1 = require("ui/dialogs");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authService, page) {
        this.router = router;
        this.authService = authService;
        this.page = page;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.usuario = new model_1.Usuario();
    };
    LoginComponent.prototype.login = function () {
        var usuarioLogado = this.authService.login(this.usuario.email, this.usuario.senha);
        if (usuarioLogado) {
            this.router.navigate(['/quadrinhos']);
        }
        else {
            dialogs_1.alert({
                title: 'Quadrinhos',
                okButtonText: 'OK',
                message: 'E-mail/Senha inválidos!!'
            });
        }
    };
    LoginComponent.prototype.cadastro = function () {
        this.router.navigate(['/auth/cadastro']);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            moduleId: module.id,
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.Router, core_2.AuthService, page_1.Page])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQUN6QywwQ0FBMkM7QUFDM0MsbUNBQXlDO0FBQ3pDLGdDQUErQjtBQUMvQixzQ0FBMkM7QUFRM0M7SUFJRSx3QkFBb0IsTUFBYyxFQUFVLFdBQXdCLEVBQVUsSUFBVTtRQUFwRSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO0lBQ3hGLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxlQUFPLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRU0sOEJBQUssR0FBWjtRQUNFLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbkYsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sZUFBSyxDQUFDO2dCQUNKLEtBQUssRUFBRSxZQUFZO2dCQUNuQixZQUFZLEVBQUUsSUFBSTtnQkFDbEIsT0FBTyxFQUFFLDBCQUEwQjthQUN0QyxDQUFDLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVNLGlDQUFRLEdBQWY7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBNUJVLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3RDLENBQUM7eUNBSzRCLGVBQU0sRUFBdUIsa0JBQVcsRUFBZ0IsV0FBSTtPQUo3RSxjQUFjLENBNkIxQjtJQUFELHFCQUFDO0NBQUEsQUE3QkQsSUE2QkM7QUE3Qlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFVzdWFyaW8gfSBmcm9tICcuLi8uLi9jb3JlL21vZGVsJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IGFsZXJ0LCBwcm9tcHQgfSBmcm9tICd1aS9kaWFsb2dzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWxvZ2luJyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIHVzdWFyaW86IFVzdWFyaW87XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgcGFnZTogUGFnZSkge1xuICB9XG4gIFxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICB0aGlzLnVzdWFyaW8gPSBuZXcgVXN1YXJpbygpO1xuICB9XG5cbiAgcHVibGljIGxvZ2luKCkge1xuICAgIGxldCB1c3VhcmlvTG9nYWRvID0gdGhpcy5hdXRoU2VydmljZS5sb2dpbih0aGlzLnVzdWFyaW8uZW1haWwsIHRoaXMudXN1YXJpby5zZW5oYSk7XG4gICAgXG4gICAgaWYgKHVzdWFyaW9Mb2dhZG8pIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3F1YWRyaW5ob3MnXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KHtcbiAgICAgICAgdGl0bGU6ICdRdWFkcmluaG9zJyxcbiAgICAgICAgb2tCdXR0b25UZXh0OiAnT0snLFxuICAgICAgICBtZXNzYWdlOiAnRS1tYWlsL1NlbmhhIGludsOhbGlkb3MhISdcbiAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2FkYXN0cm8oKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXV0aC9jYWRhc3RybyddKTsgICAgXG4gIH1cbn1cbiJdfQ==