"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var md5_1 = require("ts-md5/dist/md5");
var application_settings_1 = require("application-settings");
var model_1 = require("./../model");
var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.signup = function (nome, email, senha) {
        var usuarios = JSON.parse(application_settings_1.getString('usuarios') || '[]');
        var usuarioInexistente = usuarios.every(function (usuario) { return usuario.email !== email; });
        if (usuarioInexistente) {
            var senhaCrypto = md5_1.Md5.hashStr(senha).toString();
            var novoUsuario = new model_1.Usuario();
            novoUsuario.nome = nome;
            novoUsuario.email = email;
            novoUsuario.senha = senhaCrypto;
            usuarios.push(novoUsuario);
            application_settings_1.setString('usuarios', JSON.stringify(usuarios));
        }
        return usuarioInexistente;
    };
    AuthService.prototype.login = function (email, senha) {
        var usuarios = JSON.parse(application_settings_1.getString('usuarios') || '[]');
        var usuarioEncontrado = usuarios.find(function (usuario) { return usuario.email === email; });
        if (usuarioEncontrado) {
            var senhaCripto = md5_1.Md5.hashStr(senha).toString();
            if (usuarioEncontrado.senha == senhaCripto) {
                application_settings_1.setString('usuarioLogado', JSON.stringify(usuarioEncontrado));
                return usuarioEncontrado;
            }
            else {
                return undefined;
            }
        }
        return usuarioEncontrado;
    };
    AuthService.prototype.logout = function () {
        application_settings_1.remove('usuarioLogado');
    };
    AuthService.prototype.obterUsuarioLogado = function () {
        var usuarioLogado = application_settings_1.getString('usuarioLogado');
        return usuarioLogado ? JSON.parse(usuarioLogado) : undefined;
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHVDQUFvQztBQUdwQyw2REFVOEI7QUFDOUIsb0NBQW1DO0FBR25DO0lBRUU7SUFBZ0IsQ0FBQztJQUVWLDRCQUFNLEdBQWIsVUFBYyxJQUFZLEVBQUUsS0FBYSxFQUFFLEtBQVk7UUFDckQsSUFBSSxRQUFRLEdBQWMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO1FBQ3BFLElBQUksa0JBQWtCLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLEtBQUssS0FBSyxFQUF2QixDQUF1QixDQUFDLENBQUM7UUFFNUUsRUFBRSxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksV0FBVyxHQUFHLFNBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7WUFFaEQsSUFBSSxXQUFXLEdBQUcsSUFBSSxlQUFPLEVBQUUsQ0FBQztZQUNoQyxXQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUN4QixXQUFXLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUMxQixXQUFXLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQztZQUNoQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRTNCLGdDQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNsRCxDQUFDO1FBRUQsTUFBTSxDQUFDLGtCQUFrQixDQUFDO0lBQzVCLENBQUM7SUFFTSwyQkFBSyxHQUFaLFVBQWEsS0FBYSxFQUFFLEtBQVk7UUFDdEMsSUFBSSxRQUFRLEdBQWMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO1FBQ3BFLElBQUksaUJBQWlCLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLEtBQUssS0FBSyxFQUF2QixDQUF1QixDQUFDLENBQUM7UUFFMUUsRUFBRSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksV0FBVyxHQUFHLFNBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7WUFFaEQsRUFBRSxDQUFDLENBQUMsaUJBQWlCLENBQUMsS0FBSyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLGdDQUFTLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO2dCQUM5RCxNQUFNLENBQUMsaUJBQWlCLENBQUM7WUFDM0IsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDbkIsQ0FBQztRQUNILENBQUM7UUFFRCxNQUFNLENBQUMsaUJBQWlCLENBQUM7SUFDM0IsQ0FBQztJQUVNLDRCQUFNLEdBQWI7UUFDRSw2QkFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTSx3Q0FBa0IsR0FBekI7UUFDRSxJQUFJLGFBQWEsR0FBRyxnQ0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQy9DLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMvRCxDQUFDO0lBaERVLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTs7T0FDQSxXQUFXLENBaUR2QjtJQUFELGtCQUFDO0NBQUEsQUFqREQsSUFpREM7QUFqRFksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01kNX0gZnJvbSAndHMtbWQ1L2Rpc3QvbWQ1JztcblxuXG5pbXBvcnQge1xuICBnZXRCb29sZWFuLFxuICBzZXRCb29sZWFuLFxuICBnZXROdW1iZXIsXG4gIHNldE51bWJlcixcbiAgZ2V0U3RyaW5nLFxuICBzZXRTdHJpbmcsXG4gIGhhc0tleSxcbiAgcmVtb3ZlLFxuICBjbGVhclxufSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCB7VXN1YXJpb30gZnJvbSAnLi8uLi9tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBwdWJsaWMgc2lnbnVwKG5vbWU6IHN0cmluZywgZW1haWw6IHN0cmluZywgc2VuaGE6c3RyaW5nKTpib29sZWFuIHtcbiAgICBsZXQgdXN1YXJpb3M6IFVzdWFyaW9bXSA9IEpTT04ucGFyc2UoZ2V0U3RyaW5nKCd1c3VhcmlvcycpIHx8ICdbXScpO1xuICAgIGxldCB1c3VhcmlvSW5leGlzdGVudGUgPSB1c3Vhcmlvcy5ldmVyeSh1c3VhcmlvID0+IHVzdWFyaW8uZW1haWwgIT09IGVtYWlsKTtcblxuICAgIGlmICh1c3VhcmlvSW5leGlzdGVudGUpIHtcbiAgICAgIGxldCBzZW5oYUNyeXB0byA9IE1kNS5oYXNoU3RyKHNlbmhhKS50b1N0cmluZygpO1xuXG4gICAgICBsZXQgbm92b1VzdWFyaW8gPSBuZXcgVXN1YXJpbygpO1xuICAgICAgbm92b1VzdWFyaW8ubm9tZSA9IG5vbWU7XG4gICAgICBub3ZvVXN1YXJpby5lbWFpbCA9IGVtYWlsO1xuICAgICAgbm92b1VzdWFyaW8uc2VuaGEgPSBzZW5oYUNyeXB0bztcbiAgICAgIHVzdWFyaW9zLnB1c2gobm92b1VzdWFyaW8pO1xuXG4gICAgICBzZXRTdHJpbmcoJ3VzdWFyaW9zJywgSlNPTi5zdHJpbmdpZnkodXN1YXJpb3MpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdXN1YXJpb0luZXhpc3RlbnRlO1xuICB9XG5cbiAgcHVibGljIGxvZ2luKGVtYWlsOiBzdHJpbmcsIHNlbmhhOnN0cmluZyk6VXN1YXJpbyB7XG4gICAgbGV0IHVzdWFyaW9zOiBVc3VhcmlvW10gPSBKU09OLnBhcnNlKGdldFN0cmluZygndXN1YXJpb3MnKSB8fCAnW10nKTtcbiAgICBsZXQgdXN1YXJpb0VuY29udHJhZG8gPSB1c3Vhcmlvcy5maW5kKHVzdWFyaW8gPT4gdXN1YXJpby5lbWFpbCA9PT0gZW1haWwpO1xuXG4gICAgaWYgKHVzdWFyaW9FbmNvbnRyYWRvKSB7XG4gICAgICBsZXQgc2VuaGFDcmlwdG8gPSBNZDUuaGFzaFN0cihzZW5oYSkudG9TdHJpbmcoKTtcbiAgICAgIFxuICAgICAgaWYgKHVzdWFyaW9FbmNvbnRyYWRvLnNlbmhhID09IHNlbmhhQ3JpcHRvKSB7XG4gICAgICAgIHNldFN0cmluZygndXN1YXJpb0xvZ2FkbycsIEpTT04uc3RyaW5naWZ5KHVzdWFyaW9FbmNvbnRyYWRvKSk7XG4gICAgICAgIHJldHVybiB1c3VhcmlvRW5jb250cmFkbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVzdWFyaW9FbmNvbnRyYWRvO1xuICB9XG5cbiAgcHVibGljIGxvZ291dCgpIHtcbiAgICByZW1vdmUoJ3VzdWFyaW9Mb2dhZG8nKTtcbiAgfVxuXG4gIHB1YmxpYyBvYnRlclVzdWFyaW9Mb2dhZG8oKTogVXN1YXJpbyB7XG4gICAgbGV0IHVzdWFyaW9Mb2dhZG8gPSBnZXRTdHJpbmcoJ3VzdWFyaW9Mb2dhZG8nKTtcbiAgICByZXR1cm4gdXN1YXJpb0xvZ2FkbyA/IEpTT04ucGFyc2UodXN1YXJpb0xvZ2FkbykgOiB1bmRlZmluZWQ7XG4gIH1cbn1cbiJdfQ==