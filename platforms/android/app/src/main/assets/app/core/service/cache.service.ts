import { Injectable } from '@angular/core';
import * as storage from 'application-settings';
 
@Injectable()
export class CacheService {

  constructor() { }

  adicionar(chave:string, valor: any) {
    let cache = JSON.parse(storage.getString('cache') || '{}');
    cache[chave] = valor;
    storage.setString('cache', JSON.stringify(cache));
  }

  remover(chave: string) {
    let cache = JSON.parse(storage.getString('cache') || '{}');
    delete cache[chave];
    storage.setString('cache', JSON.stringify(cache));
  }

  obter(chave: string): any {
    let cache = JSON.parse(storage.getString('cache') || '{}');
    return cache[chave];
  }
}
 