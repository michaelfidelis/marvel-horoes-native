import { Injectable } from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';


import {
  getBoolean,
  setBoolean,
  getNumber,
  setNumber,
  getString,
  setString,
  hasKey,
  remove,
  clear
} from "application-settings";
import {Usuario} from './../model';

@Injectable()
export class AuthService {

  constructor() { }

  public signup(nome: string, email: string, senha:string):boolean {
    let usuarios: Usuario[] = JSON.parse(getString('usuarios') || '[]');
    let usuarioInexistente = usuarios.every(usuario => usuario.email !== email);

    if (usuarioInexistente) {
      let senhaCrypto = Md5.hashStr(senha).toString();

      let novoUsuario = new Usuario();
      novoUsuario.nome = nome;
      novoUsuario.email = email;
      novoUsuario.senha = senhaCrypto;
      usuarios.push(novoUsuario);

      setString('usuarios', JSON.stringify(usuarios));
    }

    return usuarioInexistente;
  }

  public login(email: string, senha:string):Usuario {
    let usuarios: Usuario[] = JSON.parse(getString('usuarios') || '[]');
    let usuarioEncontrado = usuarios.find(usuario => usuario.email === email);

    if (usuarioEncontrado) {
      let senhaCripto = Md5.hashStr(senha).toString();
      
      if (usuarioEncontrado.senha == senhaCripto) {
        setString('usuarioLogado', JSON.stringify(usuarioEncontrado));
        return usuarioEncontrado;
      } else {
        return undefined;
      }
    }

    return usuarioEncontrado;
  }

  public logout() {
    remove('usuarioLogado');
  }

  public obterUsuarioLogado(): Usuario {
    return JSON.parse(getString('usuarioLogado'));
  }
}
