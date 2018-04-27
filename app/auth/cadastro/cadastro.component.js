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
        var _this = this;
        if (!this.camposValidos())
            return;
        this.authService.signup(this.usuario.nome, this.usuario.email, this.usuario.senha).subscribe(function (usuarioCadastrado) {
            dialogs_1.alert({
                title: 'Quadrinhos',
                okButtonText: 'OK',
                message: 'Usuário cadastrado com sucesso!'
            });
            _this.router.navigate(['/auth']);
        }, function (errorResponse) {
            dialogs_1.alert({
                title: 'Quadrinhos',
                okButtonText: 'OK',
                message: errorResponse
            });
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FkYXN0cm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FkYXN0cm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQUN6QywwQ0FBMkM7QUFDM0MsbUNBQXlDO0FBQ3pDLGdDQUErQjtBQUMvQixzQ0FBMkM7QUFRM0M7SUFHSSwyQkFBb0IsTUFBYyxFQUFVLFdBQXdCLEVBQVUsSUFBVTtRQUFwRSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUcsQ0FBQztJQUU1RixvQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGVBQU8sRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBRUQscUNBQVMsR0FBVDtRQUFBLGlCQXFCQztRQW5CRyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUVsQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FDeEYsVUFBQyxpQkFBaUI7WUFDZCxlQUFLLENBQUM7Z0JBQ0YsS0FBSyxFQUFFLFlBQVk7Z0JBQ25CLFlBQVksRUFBRSxJQUFJO2dCQUNsQixPQUFPLEVBQUUsaUNBQWlDO2FBQzdDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNwQyxDQUFDLEVBQ0QsVUFBQyxhQUFhO1lBQ1YsZUFBSyxDQUFDO2dCQUNGLEtBQUssRUFBRSxZQUFZO2dCQUNuQixZQUFZLEVBQUUsSUFBSTtnQkFDbEIsT0FBTyxFQUFFLGFBQWE7YUFDekIsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBRU8seUNBQWEsR0FBckI7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM1RCxlQUFLLENBQUM7Z0JBQ0YsS0FBSyxFQUFFLFlBQVk7Z0JBQ25CLFlBQVksRUFBRSxJQUFJO2dCQUNsQixPQUFPLEVBQUUsa0NBQTZCO2FBQ3pDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyRSxlQUFLLENBQUM7Z0JBQ0YsS0FBSyxFQUFFLFlBQVk7Z0JBQ25CLFlBQVksRUFBRSxJQUFJO2dCQUNsQixPQUFPLEVBQUUsb0NBQStCO2FBQzNDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyRSxlQUFLLENBQUM7Z0JBQ0YsS0FBSyxFQUFFLFlBQVk7Z0JBQ25CLFlBQVksRUFBRSxJQUFJO2dCQUNsQixPQUFPLEVBQUUsbUNBQThCO2FBQzFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNELGtDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQTdEUSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQzNDLENBQUM7eUNBSThCLGVBQU0sRUFBdUIsa0JBQVcsRUFBZ0IsV0FBSTtPQUgvRSxpQkFBaUIsQ0E4RDdCO0lBQUQsd0JBQUM7Q0FBQSxBQTlERCxJQThEQztBQTlEWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFVzdWFyaW8gfSBmcm9tICcuLi8uLi9jb3JlL21vZGVsJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgeyBhbGVydCwgcHJvbXB0IH0gZnJvbSAndWkvZGlhbG9ncyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLWNhZGFzdHJvJyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jYWRhc3Ryby5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vY2FkYXN0cm8uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDYWRhc3Ryb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIHVzdWFyaW86IFVzdWFyaW87XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7fVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudXN1YXJpbyA9IG5ldyBVc3VhcmlvKCk7XG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIH1cblxuICAgIGNhZGFzdHJhcigpIHtcblxuICAgICAgICBpZiAoIXRoaXMuY2FtcG9zVmFsaWRvcygpKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5zaWdudXAodGhpcy51c3VhcmlvLm5vbWUsIHRoaXMudXN1YXJpby5lbWFpbCwgdGhpcy51c3VhcmlvLnNlbmhhKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAodXN1YXJpb0NhZGFzdHJhZG8pID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnUXVhZHJpbmhvcycsXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1VzdcOhcmlvIGNhZGFzdHJhZG8gY29tIHN1Y2Vzc28hJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2F1dGgnXSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnUXVhZHJpbmhvcycsICAgIFxuICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yUmVzcG9uc2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNhbXBvc1ZhbGlkb3MoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLnVzdWFyaW8ubm9tZSA9PSB1bmRlZmluZWQgfHwgdGhpcy51c3VhcmlvLm5vbWUgPT0gJycpIHtcbiAgICAgICAgICAgIGFsZXJ0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1F1YWRyaW5ob3MnLFxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgUHJlZW5jaGEgbyBub21lIGRvIHVzdcOhcmlvIWBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudXN1YXJpby5lbWFpbCA9PSB1bmRlZmluZWQgfHwgdGhpcy51c3VhcmlvLmVtYWlsID09ICcnKSB7XG4gICAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdRdWFkcmluaG9zJyxcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYFByZWVuY2hhIG8gZS1tYWlsIGRvIHVzdcOhcmlvIWBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudXN1YXJpby5zZW5oYSA9PSB1bmRlZmluZWQgfHwgdGhpcy51c3VhcmlvLnNlbmhhID09ICcnKSB7XG4gICAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdRdWFkcmluaG9zJyxcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYFByZWVuY2hhIGEgc2VuaGEgZG8gdXN1w6FyaW8hYFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdm9sdGFyKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hdXRoJ10pO1xuICAgIH1cbn1cbiJdfQ==