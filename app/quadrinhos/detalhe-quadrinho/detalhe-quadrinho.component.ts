import { Component, OnInit, Input } from "@angular/core";
import { Comic, ComicData } from './../../core/model/marvel/';
import { Observable } from 'rxjs/Observable';
import { QuadrinhoService, ColecaoPessoalService, CacheService } from "../../core";
import { Router } from "@angular/router";
import { DatePipe } from "@angular/common";
import {Location} from '@angular/common';
import { alert } from 'ui/dialogs';

@Component({
    selector: "app-detalhe-quadrinho",
    moduleId: module.id,
    templateUrl: "./detalhe-quadrinho.component.html",
    styleUrls: ['./detalhe-quadrinho.component.scss']

}) 
export class DetalheQuadrinhoComponent implements OnInit {
    
    public quadrinho: Comic;
    
    constructor(
        private cacheService: CacheService,
        private datePipe: DatePipe,
        private colecaoPessoalService: ColecaoPessoalService,
        private angularLocation: Location) { 
    }

    ngOnInit(): void {
        this.quadrinho = this.cacheService.obter('quadrinho-detalhe');

        let favorito = this.colecaoPessoalService.obter(this.quadrinho.id);
        if (favorito) {
            this.quadrinho.isFavorite = true;
        }
    }

    toDate(data: string):string {
        let dataConvertida = new Date(data);

        if (!isNaN(dataConvertida.getDate())) {
            return this.datePipe.transform(dataConvertida, 'dd-MM-yyyy');
        }

        return 'Data inválida';
    }

    adicionarFavorito() {
        this.colecaoPessoalService.adicionar(this.quadrinho);
        this.quadrinho.isFavorite = true;
    }

    removerFavorito() {
        this.colecaoPessoalService.remover(this.quadrinho.id);
        this.quadrinho.isFavorite = false;
    }


    voltar() {
        this.angularLocation.back();
    }
}