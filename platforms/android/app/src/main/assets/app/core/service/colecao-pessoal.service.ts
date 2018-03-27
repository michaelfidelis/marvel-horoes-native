import { Comic } from './../model/marvel/marvel-models';
import { Injectable } from '@angular/core';
import * as storage from 'application-settings';
 
@Injectable()
export class ColecaoPessoalService {

  constructor() { }

  adicionar(quadrinho: Comic) {
    let quadrinhos: Comic[] = JSON.parse(storage.getString('colecao-pessoal') || '[]');
    quadrinhos.push(quadrinho);
    storage.setString('colecao-pessoal', JSON.stringify(quadrinhos));
  }

  remover(codigoQuadrinho: number) {
    let quadrinhos: Comic[] = JSON.parse(storage.getString('colecao-pessoal') || '[]');
    let quadrinhosAtualizados = quadrinhos.filter(quadrinho => quadrinho.id !== codigoQuadrinho);
    storage.setString('colecao-pessoal', JSON.stringify(quadrinhosAtualizados));
  }

  listar(): Comic[] {
    return JSON.parse(storage.getString('colecao-pessoal') || '[]');
  }

  obter(codigoQuadrinho: number): Comic {
    let quadrinhos: Comic[] = JSON.parse(storage.getString('colecao-pessoal') || '[]');
    let quadrinhoEncontrado = quadrinhos.find(quadrinho => quadrinho.id === codigoQuadrinho);
    return  quadrinhos.find(quadrinho => quadrinho.id === codigoQuadrinho);
  }
}
