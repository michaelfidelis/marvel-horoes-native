import { Usuario } from './../model/usuario';
import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/materialize';
import 'rxjs/add/operator/dematerialize';
import * as storage from "application-settings";

@Injectable()
export class MockAuthInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let users: any[] = JSON.parse(storage.getString('users')  || '[]');
        return Observable.of(null)
            .mergeMap(() => {
                if (request.url.endsWith('/api/auth') && request.method === 'POST') {
                    let filteredUsers = users.filter((user) => {
                        return user.username === request.body.username && user.password === request.body.password;
                    });

                    if (filteredUsers.length) {
                        let user = filteredUsers[0];
                        let body = {
                            usuario: user,
                            token: 'fake-jwt-token'
                        };

                        return Observable.of(new HttpResponse({ status: 200, body: body }));
                    } else {
                        return Observable.throw('Usuário ou senha inválidos');
                    }
                }

                // create user
                if (request.url.endsWith('/api/users') && request.method === 'POST') {
                    // get new user object from post body
                    let newUser: Usuario = request.body;

                    // validation
                    let duplicateUser = users.filter((user) => {
                        return user.email === newUser.email;
                    });
                    if (duplicateUser.length) {
                        return Observable.throw('Usuário  "' + newUser.email + '" já existe.');
                    }


                    // save new user
                    users.push(newUser);
                    storage.setString('users', JSON.stringify(users));

                    // respond 200 OK
                    return Observable.of(new HttpResponse({ status: 200 }));
                }

                return next.handle(request);
            })
            .materialize()
            .delay(500)
            .dematerialize();
    }
}
