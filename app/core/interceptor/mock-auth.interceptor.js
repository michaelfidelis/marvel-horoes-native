"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/mergeMap");
require("rxjs/add/operator/materialize");
require("rxjs/add/operator/dematerialize");
var storage = require("application-settings");
var MockAuthInterceptor = /** @class */ (function () {
    function MockAuthInterceptor() {
    }
    MockAuthInterceptor.prototype.intercept = function (request, next) {
        var users = JSON.parse(storage.getString('users') || '[]');
        return Observable_1.Observable.of(null)
            .mergeMap(function () {
            if (request.url.endsWith('/api/auth') && request.method === 'POST') {
                var filteredUsers = users.filter(function (user) {
                    return user.username === request.body.username && user.password === request.body.password;
                });
                if (filteredUsers.length) {
                    var user = filteredUsers[0];
                    var body = {
                        usuario: user,
                        token: 'fake-jwt-token'
                    };
                    return Observable_1.Observable.of(new http_1.HttpResponse({ status: 200, body: body }));
                }
                else {
                    return Observable_1.Observable.throw('Usuário ou senha inválidos');
                }
            }
            // create user
            if (request.url.endsWith('/api/users') && request.method === 'POST') {
                // get new user object from post body
                var newUser_1 = request.body;
                // validation
                var duplicateUser = users.filter(function (user) {
                    return user.email === newUser_1.email;
                });
                if (duplicateUser.length) {
                    return Observable_1.Observable.throw('Usuário  "' + newUser_1.email + '" já existe.');
                }
                // save new user
                users.push(newUser_1);
                storage.setString('users', JSON.stringify(users));
                // respond 200 OK
                return Observable_1.Observable.of(new http_1.HttpResponse({ status: 200 }));
            }
            return next.handle(request);
        })
            .materialize()
            .delay(500)
            .dematerialize();
    };
    MockAuthInterceptor = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], MockAuthInterceptor);
    return MockAuthInterceptor;
}());
exports.MockAuthInterceptor = MockAuthInterceptor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1hdXRoLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9jay1hdXRoLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esc0NBQTJDO0FBQzNDLDZDQU84QjtBQUM5Qiw4Q0FBNkM7QUFDN0Msa0NBQWdDO0FBQ2hDLHFDQUFtQztBQUNuQyxtQ0FBaUM7QUFDakMsc0NBQW9DO0FBQ3BDLHlDQUF1QztBQUN2QywyQ0FBeUM7QUFDekMsOENBQWdEO0FBR2hEO0lBQ0k7SUFBZSxDQUFDO0lBRWhCLHVDQUFTLEdBQVQsVUFBVSxPQUF5QixFQUFFLElBQWlCO1FBQ2xELElBQUksS0FBSyxHQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSyxJQUFJLENBQUMsQ0FBQztRQUNuRSxNQUFNLENBQUMsdUJBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2FBQ3JCLFFBQVEsQ0FBQztZQUNOLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDakUsSUFBSSxhQUFhLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUk7b0JBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQzlGLENBQUMsQ0FBQyxDQUFDO2dCQUVILEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUN2QixJQUFJLElBQUksR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzVCLElBQUksSUFBSSxHQUFHO3dCQUNQLE9BQU8sRUFBRSxJQUFJO3dCQUNiLEtBQUssRUFBRSxnQkFBZ0I7cUJBQzFCLENBQUM7b0JBRUYsTUFBTSxDQUFDLHVCQUFVLENBQUMsRUFBRSxDQUFDLElBQUksbUJBQVksQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDeEUsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQztnQkFDMUQsQ0FBQztZQUNMLENBQUM7WUFFRCxjQUFjO1lBQ2QsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNsRSxxQ0FBcUM7Z0JBQ3JDLElBQUksU0FBTyxHQUFZLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBRXBDLGFBQWE7Z0JBQ2IsSUFBSSxhQUFhLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUk7b0JBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ3hDLENBQUMsQ0FBQyxDQUFDO2dCQUNILEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUN2QixNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLFNBQU8sQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDLENBQUM7Z0JBQzNFLENBQUM7Z0JBR0QsZ0JBQWdCO2dCQUNoQixLQUFLLENBQUMsSUFBSSxDQUFDLFNBQU8sQ0FBQyxDQUFDO2dCQUNwQixPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBRWxELGlCQUFpQjtnQkFDakIsTUFBTSxDQUFDLHVCQUFVLENBQUMsRUFBRSxDQUFDLElBQUksbUJBQVksQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDNUQsQ0FBQztZQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQzthQUNELFdBQVcsRUFBRTthQUNiLEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDVixhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBcERRLG1CQUFtQjtRQUQvQixpQkFBVSxFQUFFOztPQUNBLG1CQUFtQixDQXFEL0I7SUFBRCwwQkFBQztDQUFBLEFBckRELElBcURDO0FBckRZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzdWFyaW8gfSBmcm9tICcuLy4uL21vZGVsL3VzdWFyaW8nO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgICBIdHRwUmVxdWVzdCxcbiAgICBIdHRwUmVzcG9uc2UsXG4gICAgSHR0cEhhbmRsZXIsXG4gICAgSHR0cEV2ZW50LFxuICAgIEh0dHBJbnRlcmNlcHRvcixcbiAgICBIVFRQX0lOVEVSQ0VQVE9SU1xufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9vZic7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWxheSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21lcmdlTWFwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWF0ZXJpYWxpemUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZW1hdGVyaWFsaXplJztcbmltcG9ydCAqIGFzIHN0b3JhZ2UgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNb2NrQXV0aEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgICAgIGxldCB1c2VyczogYW55W10gPSBKU09OLnBhcnNlKHN0b3JhZ2UuZ2V0U3RyaW5nKCd1c2VycycpICB8fCAnW10nKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUub2YobnVsbClcbiAgICAgICAgICAgIC5tZXJnZU1hcCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcXVlc3QudXJsLmVuZHNXaXRoKCcvYXBpL2F1dGgnKSAmJiByZXF1ZXN0Lm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJlZFVzZXJzID0gdXNlcnMuZmlsdGVyKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXNlci51c2VybmFtZSA9PT0gcmVxdWVzdC5ib2R5LnVzZXJuYW1lICYmIHVzZXIucGFzc3dvcmQgPT09IHJlcXVlc3QuYm9keS5wYXNzd29yZDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbHRlcmVkVXNlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXNlciA9IGZpbHRlcmVkVXNlcnNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYm9keSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c3VhcmlvOiB1c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiAnZmFrZS1qd3QtdG9rZW4nXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZihuZXcgSHR0cFJlc3BvbnNlKHsgc3RhdHVzOiAyMDAsIGJvZHk6IGJvZHkgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coJ1VzdcOhcmlvIG91IHNlbmhhIGludsOhbGlkb3MnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSB1c2VyXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVlc3QudXJsLmVuZHNXaXRoKCcvYXBpL3VzZXJzJykgJiYgcmVxdWVzdC5tZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBnZXQgbmV3IHVzZXIgb2JqZWN0IGZyb20gcG9zdCBib2R5XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdVc2VyOiBVc3VhcmlvID0gcmVxdWVzdC5ib2R5O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHZhbGlkYXRpb25cbiAgICAgICAgICAgICAgICAgICAgbGV0IGR1cGxpY2F0ZVVzZXIgPSB1c2Vycy5maWx0ZXIoKHVzZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1c2VyLmVtYWlsID09PSBuZXdVc2VyLmVtYWlsO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGR1cGxpY2F0ZVVzZXIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdygnVXN1w6FyaW8gIFwiJyArIG5ld1VzZXIuZW1haWwgKyAnXCIgasOhIGV4aXN0ZS4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gc2F2ZSBuZXcgdXNlclxuICAgICAgICAgICAgICAgICAgICB1c2Vycy5wdXNoKG5ld1VzZXIpO1xuICAgICAgICAgICAgICAgICAgICBzdG9yYWdlLnNldFN0cmluZygndXNlcnMnLCBKU09OLnN0cmluZ2lmeSh1c2VycykpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlc3BvbmQgMjAwIE9LXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKG5ldyBIdHRwUmVzcG9uc2UoeyBzdGF0dXM6IDIwMCB9KSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXRlcmlhbGl6ZSgpXG4gICAgICAgICAgICAuZGVsYXkoNTAwKVxuICAgICAgICAgICAgLmRlbWF0ZXJpYWxpemUoKTtcbiAgICB9XG59XG4iXX0=