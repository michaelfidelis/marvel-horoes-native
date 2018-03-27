"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var md5_1 = require("ts-md5/dist/md5");
var storage = require("application-settings");
var model_1 = require("./../model");
var router_1 = require("@angular/router");
var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
    }
    AuthService.prototype.signup = function (nome, email, senha) {
        var usuarios = JSON.parse(storage.getString('usuarios') || '[]');
        var usuarioInexistente = usuarios.every(function (usuario) { return usuario.email !== email; });
        if (usuarioInexistente) {
            var senhaCrypto = md5_1.Md5.hashStr(senha).toString();
            var novoUsuario = new model_1.Usuario();
            novoUsuario.nome = nome;
            novoUsuario.email = email;
            novoUsuario.senha = senhaCrypto;
            usuarios.push(novoUsuario);
            storage.setString('usuarios', JSON.stringify(usuarios));
        }
        return usuarioInexistente;
    };
    AuthService.prototype.login = function (email, senha) {
        var usuarios = JSON.parse(storage.getString('usuarios') || '[]');
        var usuarioEncontrado = usuarios.find(function (usuario) { return usuario.email === email; });
        if (usuarioEncontrado) {
            var senhaCripto = md5_1.Md5.hashStr(senha).toString();
            if (usuarioEncontrado.senha == senhaCripto) {
                storage.setString('usuarioLogado', JSON.stringify(usuarioEncontrado));
                return usuarioEncontrado;
            }
            else {
                return undefined;
            }
        }
        return usuarioEncontrado;
    };
    AuthService.prototype.logout = function () {
        storage.remove('usuarioLogado');
        this.router.navigate(['/auth']);
    };
    AuthService.prototype.obterUsuarioLogado = function () {
        var usuarioLogado = storage.getString('usuarioLogado');
        return usuarioLogado ? JSON.parse(usuarioLogado) : undefined;
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHVDQUFvQztBQUdwQyw4Q0FBZ0Q7QUFDaEQsb0NBQW1DO0FBQ25DLDBDQUF5QztBQUd6QztJQUVFLHFCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFJLENBQUM7SUFFaEMsNEJBQU0sR0FBYixVQUFjLElBQVksRUFBRSxLQUFhLEVBQUUsS0FBWTtRQUNyRCxJQUFJLFFBQVEsR0FBYyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7UUFDNUUsSUFBSSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssS0FBSyxLQUFLLEVBQXZCLENBQXVCLENBQUMsQ0FBQztRQUU1RSxFQUFFLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxXQUFXLEdBQUcsU0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUVoRCxJQUFJLFdBQVcsR0FBRyxJQUFJLGVBQU8sRUFBRSxDQUFDO1lBQ2hDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLFdBQVcsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQzFCLFdBQVcsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO1lBQ2hDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFM0IsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzFELENBQUM7UUFFRCxNQUFNLENBQUMsa0JBQWtCLENBQUM7SUFDNUIsQ0FBQztJQUVNLDJCQUFLLEdBQVosVUFBYSxLQUFhLEVBQUUsS0FBWTtRQUN0QyxJQUFJLFFBQVEsR0FBYyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7UUFDNUUsSUFBSSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssS0FBSyxLQUFLLEVBQXZCLENBQXVCLENBQUMsQ0FBQztRQUUxRSxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxXQUFXLEdBQUcsU0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUVoRCxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDM0MsT0FBTyxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RFLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztZQUMzQixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUNuQixDQUFDO1FBQ0gsQ0FBQztRQUVELE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztJQUMzQixDQUFDO0lBRU0sNEJBQU0sR0FBYjtRQUNFLE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSx3Q0FBa0IsR0FBekI7UUFDRSxJQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMvRCxDQUFDO0lBakRVLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FHaUIsZUFBTTtPQUZ2QixXQUFXLENBa0R2QjtJQUFELGtCQUFDO0NBQUEsQUFsREQsSUFrREM7QUFsRFksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01kNX0gZnJvbSAndHMtbWQ1L2Rpc3QvbWQ1JztcblxuXG5pbXBvcnQgKiBhcyBzdG9yYWdlIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHtVc3VhcmlvfSBmcm9tICcuLy4uL21vZGVsJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XG5cbiAgcHVibGljIHNpZ251cChub21lOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcsIHNlbmhhOnN0cmluZyk6Ym9vbGVhbiB7XG4gICAgbGV0IHVzdWFyaW9zOiBVc3VhcmlvW10gPSBKU09OLnBhcnNlKHN0b3JhZ2UuZ2V0U3RyaW5nKCd1c3VhcmlvcycpIHx8ICdbXScpO1xuICAgIGxldCB1c3VhcmlvSW5leGlzdGVudGUgPSB1c3Vhcmlvcy5ldmVyeSh1c3VhcmlvID0+IHVzdWFyaW8uZW1haWwgIT09IGVtYWlsKTtcblxuICAgIGlmICh1c3VhcmlvSW5leGlzdGVudGUpIHtcbiAgICAgIGxldCBzZW5oYUNyeXB0byA9IE1kNS5oYXNoU3RyKHNlbmhhKS50b1N0cmluZygpO1xuXG4gICAgICBsZXQgbm92b1VzdWFyaW8gPSBuZXcgVXN1YXJpbygpO1xuICAgICAgbm92b1VzdWFyaW8ubm9tZSA9IG5vbWU7XG4gICAgICBub3ZvVXN1YXJpby5lbWFpbCA9IGVtYWlsO1xuICAgICAgbm92b1VzdWFyaW8uc2VuaGEgPSBzZW5oYUNyeXB0bztcbiAgICAgIHVzdWFyaW9zLnB1c2gobm92b1VzdWFyaW8pO1xuXG4gICAgICBzdG9yYWdlLnNldFN0cmluZygndXN1YXJpb3MnLCBKU09OLnN0cmluZ2lmeSh1c3VhcmlvcykpO1xuICAgIH1cblxuICAgIHJldHVybiB1c3VhcmlvSW5leGlzdGVudGU7XG4gIH1cblxuICBwdWJsaWMgbG9naW4oZW1haWw6IHN0cmluZywgc2VuaGE6c3RyaW5nKTpVc3VhcmlvIHtcbiAgICBsZXQgdXN1YXJpb3M6IFVzdWFyaW9bXSA9IEpTT04ucGFyc2Uoc3RvcmFnZS5nZXRTdHJpbmcoJ3VzdWFyaW9zJykgfHwgJ1tdJyk7XG4gICAgbGV0IHVzdWFyaW9FbmNvbnRyYWRvID0gdXN1YXJpb3MuZmluZCh1c3VhcmlvID0+IHVzdWFyaW8uZW1haWwgPT09IGVtYWlsKTtcblxuICAgIGlmICh1c3VhcmlvRW5jb250cmFkbykge1xuICAgICAgbGV0IHNlbmhhQ3JpcHRvID0gTWQ1Lmhhc2hTdHIoc2VuaGEpLnRvU3RyaW5nKCk7XG4gICAgICBcbiAgICAgIGlmICh1c3VhcmlvRW5jb250cmFkby5zZW5oYSA9PSBzZW5oYUNyaXB0bykge1xuICAgICAgICBzdG9yYWdlLnNldFN0cmluZygndXN1YXJpb0xvZ2FkbycsIEpTT04uc3RyaW5naWZ5KHVzdWFyaW9FbmNvbnRyYWRvKSk7XG4gICAgICAgIHJldHVybiB1c3VhcmlvRW5jb250cmFkbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVzdWFyaW9FbmNvbnRyYWRvO1xuICB9XG5cbiAgcHVibGljIGxvZ291dCgpIHtcbiAgICBzdG9yYWdlLnJlbW92ZSgndXN1YXJpb0xvZ2FkbycpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2F1dGgnXSk7XG4gIH1cblxuICBwdWJsaWMgb2J0ZXJVc3VhcmlvTG9nYWRvKCk6IFVzdWFyaW8ge1xuICAgIGxldCB1c3VhcmlvTG9nYWRvID0gc3RvcmFnZS5nZXRTdHJpbmcoJ3VzdWFyaW9Mb2dhZG8nKTtcbiAgICByZXR1cm4gdXN1YXJpb0xvZ2FkbyA/IEpTT04ucGFyc2UodXN1YXJpb0xvZ2FkbykgOiB1bmRlZmluZWQ7XG4gIH1cbn1cbiJdfQ==