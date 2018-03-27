import { Component, OnInit, Input } from '@angular/core';
import { Comic } from './../../core/model/marvel/';
import { ColecaoPessoalService, CacheService } from '../../core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({ 
    selector: 'app-lista-colecao',
    moduleId: module.id,
    templateUrl: './lista-colecao.component.html'
})
export class ListaColecaoComponent implements OnInit {
    
    public quadrinhos: Comic[];

    constructor(
        private router: Router,
        private colecaoPessoalService: ColecaoPessoalService,
        private cacheService: CacheService,
        private angularLocation: Location
    ) {}

    ngOnInit(): void {
        this.quadrinhos = this.obterQuadrinhos();
    }

    verDetalhes(quadrinho: Comic) {
        this.cacheService.adicionar('quadrinho-detalhe', quadrinho);
        this.router.navigate(['/quadrinhos/detalhes']);
    }

    obterQuadrinhos() {
        return this.colecaoPessoalService.listar();
    } 
    
    buscar(titulo: string){
        this.quadrinhos = this.obterQuadrinhos().filter(quadrinho => quadrinho.title.toLowerCase().search(titulo.toLowerCase()) != -1);
    }

    voltar() {
        this.angularLocation.back();
    }
}
