"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var storage = require("application-settings");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var AuthService = /** @class */ (function () {
    function AuthService(router, http) {
        this.router = router;
        this.http = http;
    }
    AuthService.prototype.signup = function (nome, email, senha) {
        return this.http.post('/api/users', { nome: nome, email: email, senha: senha });
    };
    AuthService.prototype.login = function (email, senha) {
        return this.http.post('/api/auth/', { email: email, senha: senha }).map(function (response) {
            var usuario;
            if (response.usuario) {
                usuario = response.usuario;
                storage.setString('usuarioLogado', JSON.stringify(usuario));
            }
            return usuario;
        });
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
        __metadata("design:paramtypes", [router_1.Router, http_1.HttpClient])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSTNDLDhDQUFnRDtBQUVoRCwwQ0FBeUM7QUFDekMsNkNBQWtEO0FBR2xEO0lBRUUscUJBQW9CLE1BQWMsRUFBVSxJQUFnQjtRQUF4QyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7SUFFMUQsNEJBQU0sR0FBYixVQUFjLElBQVksRUFBRSxLQUFhLEVBQUUsS0FBWTtRQUNuRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU0sWUFBWSxFQUFFLEVBQUMsSUFBSSxNQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFTSwyQkFBSyxHQUFaLFVBQWEsS0FBYSxFQUFFLEtBQVk7UUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFNLFlBQVksRUFBRSxFQUFDLEtBQUssT0FBQSxFQUFFLEtBQUssT0FBQSxFQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxRQUFRO1lBQ3BFLElBQUksT0FBZ0IsQ0FBQztZQUVyQixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDckIsT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUM7Z0JBQzNCLE9BQU8sQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUM5RCxDQUFDO1lBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSw0QkFBTSxHQUFiO1FBQ0UsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVNLHdDQUFrQixHQUF6QjtRQUNFLElBQUksYUFBYSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDdkQsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQy9ELENBQUM7SUE3QlUsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUdpQixlQUFNLEVBQWdCLGlCQUFVO09BRmpELFdBQVcsQ0E4QnZCO0lBQUQsa0JBQUM7Q0FBQSxBQTlCRCxJQThCQztBQTlCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWQ1fSBmcm9tICd0cy1tZDUvZGlzdC9tZDUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbmltcG9ydCAqIGFzIHN0b3JhZ2UgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQge1VzdWFyaW99IGZyb20gJy4vLi4vbW9kZWwnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICBwdWJsaWMgc2lnbnVwKG5vbWU6IHN0cmluZywgZW1haWw6IHN0cmluZywgc2VuaGE6c3RyaW5nKTpPYnNlcnZhYmxlPFVzdWFyaW8+IHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KCcvYXBpL3VzZXJzJywge25vbWUsIGVtYWlsLCBzZW5oYX0pO1xuICB9XG5cbiAgcHVibGljIGxvZ2luKGVtYWlsOiBzdHJpbmcsIHNlbmhhOnN0cmluZyk6T2JzZXJ2YWJsZTxVc3VhcmlvPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4oJy9hcGkvYXV0aC8nLCB7ZW1haWwsIHNlbmhhfSkubWFwKChyZXNwb25zZSkgPT4ge1xuICAgICAgbGV0IHVzdWFyaW86IFVzdWFyaW87XG5cbiAgICAgIGlmIChyZXNwb25zZS51c3VhcmlvKSB7XG4gICAgICAgIHVzdWFyaW8gPSByZXNwb25zZS51c3VhcmlvO1xuICAgICAgICBzdG9yYWdlLnNldFN0cmluZygndXN1YXJpb0xvZ2FkbycsIEpTT04uc3RyaW5naWZ5KHVzdWFyaW8pKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVzdWFyaW87XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbG9nb3V0KCkge1xuICAgIHN0b3JhZ2UucmVtb3ZlKCd1c3VhcmlvTG9nYWRvJyk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXV0aCddKTtcbiAgfVxuXG4gIHB1YmxpYyBvYnRlclVzdWFyaW9Mb2dhZG8oKTogVXN1YXJpbyB7XG4gICAgbGV0IHVzdWFyaW9Mb2dhZG8gPSBzdG9yYWdlLmdldFN0cmluZygndXN1YXJpb0xvZ2FkbycpO1xuICAgIHJldHVybiB1c3VhcmlvTG9nYWRvID8gSlNPTi5wYXJzZSh1c3VhcmlvTG9nYWRvKSA6IHVuZGVmaW5lZDtcbiAgfVxufVxuIl19