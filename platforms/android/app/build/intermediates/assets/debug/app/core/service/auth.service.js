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
        return JSON.parse(application_settings_1.getString('usuarioLogado'));
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHVDQUFvQztBQUdwQyw2REFVOEI7QUFDOUIsb0NBQW1DO0FBR25DO0lBRUU7SUFBZ0IsQ0FBQztJQUVWLDRCQUFNLEdBQWIsVUFBYyxJQUFZLEVBQUUsS0FBYSxFQUFFLEtBQVk7UUFDckQsSUFBSSxRQUFRLEdBQWMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO1FBQ3BFLElBQUksa0JBQWtCLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLEtBQUssS0FBSyxFQUF2QixDQUF1QixDQUFDLENBQUM7UUFFNUUsRUFBRSxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksV0FBVyxHQUFHLFNBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7WUFFaEQsSUFBSSxXQUFXLEdBQUcsSUFBSSxlQUFPLEVBQUUsQ0FBQztZQUNoQyxXQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUN4QixXQUFXLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUMxQixXQUFXLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQztZQUNoQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRTNCLGdDQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNsRCxDQUFDO1FBRUQsTUFBTSxDQUFDLGtCQUFrQixDQUFDO0lBQzVCLENBQUM7SUFFTSwyQkFBSyxHQUFaLFVBQWEsS0FBYSxFQUFFLEtBQVk7UUFDdEMsSUFBSSxRQUFRLEdBQWMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO1FBQ3BFLElBQUksaUJBQWlCLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLEtBQUssS0FBSyxFQUF2QixDQUF1QixDQUFDLENBQUM7UUFFMUUsRUFBRSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksV0FBVyxHQUFHLFNBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7WUFFaEQsRUFBRSxDQUFDLENBQUMsaUJBQWlCLENBQUMsS0FBSyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLGdDQUFTLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO2dCQUM5RCxNQUFNLENBQUMsaUJBQWlCLENBQUM7WUFDM0IsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDbkIsQ0FBQztRQUNILENBQUM7UUFFRCxNQUFNLENBQUMsaUJBQWlCLENBQUM7SUFDM0IsQ0FBQztJQUVNLDRCQUFNLEdBQWI7UUFDRSw2QkFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTSx3Q0FBa0IsR0FBekI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQS9DVSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7O09BQ0EsV0FBVyxDQWdEdkI7SUFBRCxrQkFBQztDQUFBLEFBaERELElBZ0RDO0FBaERZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNZDV9IGZyb20gJ3RzLW1kNS9kaXN0L21kNSc7XG5cblxuaW1wb3J0IHtcbiAgZ2V0Qm9vbGVhbixcbiAgc2V0Qm9vbGVhbixcbiAgZ2V0TnVtYmVyLFxuICBzZXROdW1iZXIsXG4gIGdldFN0cmluZyxcbiAgc2V0U3RyaW5nLFxuICBoYXNLZXksXG4gIHJlbW92ZSxcbiAgY2xlYXJcbn0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQge1VzdWFyaW99IGZyb20gJy4vLi4vbW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcHVibGljIHNpZ251cChub21lOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcsIHNlbmhhOnN0cmluZyk6Ym9vbGVhbiB7XG4gICAgbGV0IHVzdWFyaW9zOiBVc3VhcmlvW10gPSBKU09OLnBhcnNlKGdldFN0cmluZygndXN1YXJpb3MnKSB8fCAnW10nKTtcbiAgICBsZXQgdXN1YXJpb0luZXhpc3RlbnRlID0gdXN1YXJpb3MuZXZlcnkodXN1YXJpbyA9PiB1c3VhcmlvLmVtYWlsICE9PSBlbWFpbCk7XG5cbiAgICBpZiAodXN1YXJpb0luZXhpc3RlbnRlKSB7XG4gICAgICBsZXQgc2VuaGFDcnlwdG8gPSBNZDUuaGFzaFN0cihzZW5oYSkudG9TdHJpbmcoKTtcblxuICAgICAgbGV0IG5vdm9Vc3VhcmlvID0gbmV3IFVzdWFyaW8oKTtcbiAgICAgIG5vdm9Vc3VhcmlvLm5vbWUgPSBub21lO1xuICAgICAgbm92b1VzdWFyaW8uZW1haWwgPSBlbWFpbDtcbiAgICAgIG5vdm9Vc3VhcmlvLnNlbmhhID0gc2VuaGFDcnlwdG87XG4gICAgICB1c3Vhcmlvcy5wdXNoKG5vdm9Vc3VhcmlvKTtcblxuICAgICAgc2V0U3RyaW5nKCd1c3VhcmlvcycsIEpTT04uc3RyaW5naWZ5KHVzdWFyaW9zKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVzdWFyaW9JbmV4aXN0ZW50ZTtcbiAgfVxuXG4gIHB1YmxpYyBsb2dpbihlbWFpbDogc3RyaW5nLCBzZW5oYTpzdHJpbmcpOlVzdWFyaW8ge1xuICAgIGxldCB1c3VhcmlvczogVXN1YXJpb1tdID0gSlNPTi5wYXJzZShnZXRTdHJpbmcoJ3VzdWFyaW9zJykgfHwgJ1tdJyk7XG4gICAgbGV0IHVzdWFyaW9FbmNvbnRyYWRvID0gdXN1YXJpb3MuZmluZCh1c3VhcmlvID0+IHVzdWFyaW8uZW1haWwgPT09IGVtYWlsKTtcblxuICAgIGlmICh1c3VhcmlvRW5jb250cmFkbykge1xuICAgICAgbGV0IHNlbmhhQ3JpcHRvID0gTWQ1Lmhhc2hTdHIoc2VuaGEpLnRvU3RyaW5nKCk7XG4gICAgICBcbiAgICAgIGlmICh1c3VhcmlvRW5jb250cmFkby5zZW5oYSA9PSBzZW5oYUNyaXB0bykge1xuICAgICAgICBzZXRTdHJpbmcoJ3VzdWFyaW9Mb2dhZG8nLCBKU09OLnN0cmluZ2lmeSh1c3VhcmlvRW5jb250cmFkbykpO1xuICAgICAgICByZXR1cm4gdXN1YXJpb0VuY29udHJhZG87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1c3VhcmlvRW5jb250cmFkbztcbiAgfVxuXG4gIHB1YmxpYyBsb2dvdXQoKSB7XG4gICAgcmVtb3ZlKCd1c3VhcmlvTG9nYWRvJyk7XG4gIH1cblxuICBwdWJsaWMgb2J0ZXJVc3VhcmlvTG9nYWRvKCk6IFVzdWFyaW8ge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGdldFN0cmluZygndXN1YXJpb0xvZ2FkbycpKTtcbiAgfVxufVxuIl19