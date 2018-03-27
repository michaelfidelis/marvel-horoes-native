"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var model_1 = require("../../core/model");
var core_2 = require("../../core");
var page_1 = require("ui/page");
var dialogs_1 = require("ui/dialogs");
var CadastroComponent = /** @class */ (function () {
    function CadastroComponent(router, authService, page) {
        this.router = router;
        this.authService = authService;
        this.page = page;
    }
    CadastroComponent.prototype.ngOnInit = function () {
        this.usuario = new model_1.Usuario();
        this.page.actionBarHidden = true;
    };
    CadastroComponent.prototype.cadastrar = function () {
        if (!this.camposValidos())
            return;
        var usuarioCadastrado = this.authService.signup(this.usuario.nome, this.usuario.email, this.usuario.senha);
        if (usuarioCadastrado) {
            dialogs_1.alert({
                title: 'Quadrinhos',
                okButtonText: 'OK',
                message: 'Usuário cadastrado com sucesso!'
            });
            this.router.navigate(['/auth']);
        }
        else {
            dialogs_1.alert({
                title: 'Quadrinhos',
                okButtonText: 'OK',
                message: "O usu\u00E1rio " + this.usuario.email + " j\u00E1 existe!"
            });
        }
    };
    CadastroComponent.prototype.camposValidos = function () {
        if (this.usuario.nome == undefined || this.usuario.nome == '') {
            dialogs_1.alert({
                title: 'Quadrinhos',
                okButtonText: 'OK',
                message: "Preencha o nome do usu\u00E1rio!"
            });
            return false;
        }
        else if (this.usuario.email == undefined || this.usuario.email == '') {
            dialogs_1.alert({
                title: 'Quadrinhos',
                okButtonText: 'OK',
                message: "Preencha o e-mail do usu\u00E1rio!"
            });
            return false;
        }
        else if (this.usuario.senha == undefined || this.usuario.senha == '') {
            dialogs_1.alert({
                title: 'Quadrinhos',
                okButtonText: 'OK',
                message: "Preencha a senha do usu\u00E1rio!"
            });
            return false;
        }
        return true;
    };
    CadastroComponent.prototype.voltar = function () {
        this.router.navigate(['/auth']);
    };
    CadastroComponent = __decorate([
        core_1.Component({
            selector: 'app-cadastro',
            moduleId: module.id,
            templateUrl: './cadastro.component.html',
            styleUrls: ['./cadastro.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.Router, core_2.AuthService, page_1.Page])
    ], CadastroComponent);
    return CadastroComponent;
}());
exports.CadastroComponent = CadastroComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FkYXN0cm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FkYXN0cm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQUN6QywwQ0FBMkM7QUFDM0MsbUNBQXlDO0FBQ3pDLGdDQUErQjtBQUMvQixzQ0FBMkM7QUFRM0M7SUFHSSwyQkFBb0IsTUFBYyxFQUFVLFdBQXdCLEVBQVUsSUFBVTtRQUFwRSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUcsQ0FBQztJQUU1RixvQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGVBQU8sRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBRUQscUNBQVMsR0FBVDtRQUVJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQUMsTUFBTSxDQUFDO1FBRWxDLElBQUksaUJBQWlCLEdBQVksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQ3BELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQ3JCLENBQUM7UUFFRixFQUFFLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7WUFDcEIsZUFBSyxDQUFDO2dCQUNGLEtBQUssRUFBRSxZQUFZO2dCQUNuQixZQUFZLEVBQUUsSUFBSTtnQkFDbEIsT0FBTyxFQUFFLGlDQUFpQzthQUM3QyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sZUFBSyxDQUFDO2dCQUNKLEtBQUssRUFBRSxZQUFZO2dCQUNuQixZQUFZLEVBQUUsSUFBSTtnQkFDbEIsT0FBTyxFQUFFLG9CQUFhLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxxQkFBYTthQUN4RCxDQUFDLENBQUM7UUFDSCxDQUFDO0lBQ0wsQ0FBQztJQUVPLHlDQUFhLEdBQXJCO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDNUQsZUFBSyxDQUFDO2dCQUNGLEtBQUssRUFBRSxZQUFZO2dCQUNuQixZQUFZLEVBQUUsSUFBSTtnQkFDbEIsT0FBTyxFQUFFLGtDQUE2QjthQUN6QyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBRWpCLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDckUsZUFBSyxDQUFDO2dCQUNGLEtBQUssRUFBRSxZQUFZO2dCQUNuQixZQUFZLEVBQUUsSUFBSTtnQkFDbEIsT0FBTyxFQUFFLG9DQUErQjthQUMzQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBRWpCLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDckUsZUFBSyxDQUFDO2dCQUNGLEtBQUssRUFBRSxZQUFZO2dCQUNuQixZQUFZLEVBQUUsSUFBSTtnQkFDbEIsT0FBTyxFQUFFLG1DQUE4QjthQUMxQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBRWhCLENBQUM7SUFDRCxrQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFuRVEsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUMzQyxDQUFDO3lDQUk4QixlQUFNLEVBQXVCLGtCQUFXLEVBQWdCLFdBQUk7T0FIL0UsaUJBQWlCLENBb0U3QjtJQUFELHdCQUFDO0NBQUEsQUFwRUQsSUFvRUM7QUFwRVksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVc3VhcmlvIH0gZnJvbSAnLi4vLi4vY29yZS9tb2RlbCc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuaW1wb3J0IHsgYWxlcnQsIHByb21wdCB9IGZyb20gJ3VpL2RpYWxvZ3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1jYWRhc3RybycsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogJy4vY2FkYXN0cm8uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2FkYXN0cm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyB1c3VhcmlvOiBVc3VhcmlvO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgcGFnZTogUGFnZSkge31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnVzdWFyaW8gPSBuZXcgVXN1YXJpbygpO1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjYWRhc3RyYXIoKSB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmNhbXBvc1ZhbGlkb3MoKSkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgbGV0IHVzdWFyaW9DYWRhc3RyYWRvOiBib29sZWFuID0gdGhpcy5hdXRoU2VydmljZS5zaWdudXAoXG4gICAgICAgICAgICB0aGlzLnVzdWFyaW8ubm9tZSxcbiAgICAgICAgICAgIHRoaXMudXN1YXJpby5lbWFpbCxcbiAgICAgICAgICAgIHRoaXMudXN1YXJpby5zZW5oYVxuICAgICAgICApO1xuXG4gICAgICAgIGlmICh1c3VhcmlvQ2FkYXN0cmFkbykge1xuICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnUXVhZHJpbmhvcycsXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnT0snLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdVc3XDoXJpbyBjYWRhc3RyYWRvIGNvbSBzdWNlc3NvISdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXV0aCddKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICB0aXRsZTogJ1F1YWRyaW5ob3MnLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnT0snLFxuICAgICAgICAgICAgbWVzc2FnZTogYE8gdXN1w6FyaW8gJHt0aGlzLnVzdWFyaW8uZW1haWx9IGrDoSBleGlzdGUhYFxuICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY2FtcG9zVmFsaWRvcygpOiBib29sZWFue1xuICAgICAgICBpZiAodGhpcy51c3VhcmlvLm5vbWUgPT0gdW5kZWZpbmVkIHx8IHRoaXMudXN1YXJpby5ub21lID09ICcnKSB7XG4gICAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdRdWFkcmluaG9zJyxcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYFByZWVuY2hhIG8gbm9tZSBkbyB1c3XDoXJpbyFgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudXN1YXJpby5lbWFpbCA9PSB1bmRlZmluZWQgfHwgdGhpcy51c3VhcmlvLmVtYWlsID09ICcnKSB7XG4gICAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdRdWFkcmluaG9zJyxcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYFByZWVuY2hhIG8gZS1tYWlsIGRvIHVzdcOhcmlvIWBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy51c3VhcmlvLnNlbmhhID09IHVuZGVmaW5lZCB8fCB0aGlzLnVzdWFyaW8uc2VuaGEgPT0gJycpIHtcbiAgICAgICAgICAgIGFsZXJ0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1F1YWRyaW5ob3MnLFxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgUHJlZW5jaGEgYSBzZW5oYSBkbyB1c3XDoXJpbyFgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgfVxuICAgIHZvbHRhcigpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXV0aCddKTtcbiAgICB9XG59XG4iXX0=