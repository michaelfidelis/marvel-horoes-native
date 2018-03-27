import { Injectable } from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';


import * as storage from "application-settings";
import {Usuario} from './../model';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private router: Router) { }

  public signup(nome: string, email: string, senha:string):boolean {
    let usuarios: Usuario[] = JSON.parse(storage.getString('usuarios') || '[]');
    let usuarioInexistente = usuarios.every(usuario => usuario.email !== email);

    if (usuarioInexistente) {
      let senhaCrypto = Md5.hashStr(senha).toString();

      let novoUsuario = new Usuario();
      novoUsuario.nome = nome;
      novoUsuario.email = email;
      novoUsuario.senha = senhaCrypto;
      usuarios.push(novoUsuario);

      storage.setString('usuarios', JSON.stringify(usuarios));
    }

    return usuarioInexistente;
  }

  public login(email: string, senha:string):Usuario {
    let usuarios: Usuario[] = JSON.parse(storage.getString('usuarios') || '[]');
    let usuarioEncontrado = usuarios.find(usuario => usuario.email === email);

    if (usuarioEncontrado) {
      let senhaCripto = Md5.hashStr(senha).toString();
      
      if (usuarioEncontrado.senha == senhaCripto) {
        storage.setString('usuarioLogado', JSON.stringify(usuarioEncontrado));
        return usuarioEncontrado;
      } else {
        return undefined;
      }
    }

    return usuarioEncontrado;
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
