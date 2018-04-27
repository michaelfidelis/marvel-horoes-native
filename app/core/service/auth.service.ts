import { Injectable } from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';
import { Observable } from 'rxjs/Observable';

import * as storage from "application-settings";
import {Usuario} from './../model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }

  public signup(nome: string, email: string, senha:string):Observable<Usuario> {
      return this.http.post<any>('/api/users', {nome, email, senha});
  }

  public login(email: string, senha:string):Observable<Usuario> {
    return this.http.post<any>('/api/auth/', {email, senha}).map((response) => {
      let usuario: Usuario;

      if (response.usuario) {
        usuario = response.usuario;
        storage.setString('usuarioLogado', JSON.stringify(usuario));
      }

      return usuario;
    });
  }

  public logout() {
    storage.remove('usuarioLogado');
    this.router.navigate(['/auth']);
  }

  public obterUsuarioLogado(): Usuario {
    let usuarioLogado = storage.getString('usuarioLogado');
    return usuarioLogado ? JSON.parse(usuarioLogado) : undefined;
  }
}
