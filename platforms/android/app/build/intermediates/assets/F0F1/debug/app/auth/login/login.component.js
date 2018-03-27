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
        console.log('Usuario: ', this.usuario);
        var usuarioLogado = this.authService.login(this.usuario.email, this.usuario.senha);
        if (usuarioLogado) {
            this.router.navigate(['/items']);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQUN6QywwQ0FBMkM7QUFDM0MsbUNBQXlDO0FBQ3pDLGdDQUErQjtBQUMvQixzQ0FBMkM7QUFRM0M7SUFJRSx3QkFBb0IsTUFBYyxFQUFVLFdBQXdCLEVBQVUsSUFBVTtRQUFwRSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO0lBQ3hGLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxlQUFPLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRU0sOEJBQUssR0FBWjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QyxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRW5GLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLGVBQUssQ0FBQztnQkFDSixLQUFLLEVBQUUsWUFBWTtnQkFDbkIsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLE9BQU8sRUFBRSwwQkFBMEI7YUFDdEMsQ0FBQyxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFTSxpQ0FBUSxHQUFmO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQTdCVSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUN0QyxDQUFDO3lDQUs0QixlQUFNLEVBQXVCLGtCQUFXLEVBQWdCLFdBQUk7T0FKN0UsY0FBYyxDQThCMUI7SUFBRCxxQkFBQztDQUFBLEFBOUJELElBOEJDO0FBOUJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVc3VhcmlvIH0gZnJvbSAnLi4vLi4vY29yZS9tb2RlbCc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBhbGVydCwgcHJvbXB0IH0gZnJvbSAndWkvZGlhbG9ncyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1sb2dpbicsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyB1c3VhcmlvOiBVc3VhcmlvO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcbiAgfVxuICBcbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgdGhpcy51c3VhcmlvID0gbmV3IFVzdWFyaW8oKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2dpbigpIHtcbiAgICBjb25zb2xlLmxvZygnVXN1YXJpbzogJywgdGhpcy51c3VhcmlvKTtcbiAgICBsZXQgdXN1YXJpb0xvZ2FkbyA9IHRoaXMuYXV0aFNlcnZpY2UubG9naW4odGhpcy51c3VhcmlvLmVtYWlsLCB0aGlzLnVzdWFyaW8uc2VuaGEpO1xuICAgIFxuICAgIGlmICh1c3VhcmlvTG9nYWRvKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9pdGVtcyddKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoe1xuICAgICAgICB0aXRsZTogJ1F1YWRyaW5ob3MnLFxuICAgICAgICBva0J1dHRvblRleHQ6ICdPSycsXG4gICAgICAgIG1lc3NhZ2U6ICdFLW1haWwvU2VuaGEgaW52w6FsaWRvcyEhJ1xuICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjYWRhc3RybygpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hdXRoL2NhZGFzdHJvJ10pOyAgICBcbiAgfVxufVxuIl19