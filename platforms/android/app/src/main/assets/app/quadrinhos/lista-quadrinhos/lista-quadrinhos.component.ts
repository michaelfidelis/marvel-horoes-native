import { Component, OnInit, Input } from "@angular/core";
import { Comic, ComicData } from './../../core/model/marvel/';
import { Observable } from 'rxjs/Observable';
import { QuadrinhoService, ColecaoPessoalService, CacheService, AuthService } from "../../core";
import { EventData } from "data/observable";
import { alert, prompt, confirm} from 'ui/dialogs';
import { Router } from "@angular/router";

@Component({
    selector: "app-lista-quadrinhos",
    moduleId: module.id,
    templateUrl: "./lista-quadrinhos.component.html",
}) 
export class ListaQuadrinhosComponent implements OnInit {
    
    public quadrinhos: Observable<ComicData>;

    constructor(
        private router: Router,
        private quadrinhoService: QuadrinhoService, 
        private colecaoPessoalService: ColecaoPessoalService, 
        private cacheService: CacheService,
        private auth: AuthService) { 
        this.quadrinhos = this.quadrinhoService.obterQuadrinhos();
    }

    ngOnInit(): void {
    }

    obterQuadrinhos(titulo: string = undefined){
        this.quadrinhos = this.quadrinhoService.obterQuadrinhos(titulo);         
    }

    adicionarFavorito(quadrinho: Comic) {
        confirm({
            title: "Quadrinho",
            message: "Adicionar na coleção?",
            okButtonText: "Sim",
            cancelButtonText: "Não",
        }).then((result: boolean) => {
            if (result) {
                this.colecaoPessoalService.adicionar(quadrinho);
                alert({
                    title: 'Quadrinhos',
                    okButtonText: 'OK',
                    message: 'Quadrinho adicionado na coleção!'
                });
            }
        });
    }

    verDetalhes(quadrinho: Comic) {
        this.cacheService.adicionar('quadrinho-detalhe', quadrinho);
        this.router.navigate(['/quadrinhos/detalhes']);
    }

    verColecao(){
        this.router.navigate(['/quadrinhos/colecao']);        
    }

    logout() {
        this.auth.logout();
    }
}