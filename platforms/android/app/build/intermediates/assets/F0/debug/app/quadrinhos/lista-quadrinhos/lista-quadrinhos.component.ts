import { Component, OnInit, Input } from "@angular/core";
import { Comic, ComicData } from './../../core/model/marvel/';
import { Observable } from 'rxjs/Observable';
import { QuadrinhoService } from "../../core";
import { EventData } from "data/observable";
import { alert, prompt } from 'ui/dialogs';

@Component({
    selector: "app-lista-quadrinhos",
    moduleId: module.id,
    templateUrl: "./lista-quadrinhos.component.html",
}) 
export class ListaQuadrinhosComponent implements OnInit {
    
    public quadrinhos: Observable<ComicData>;
    constructor(private quadrinhoService: QuadrinhoService) { 
        this.quadrinhos = this.quadrinhoService.obterQuadrinhos();
    }

    ngOnInit(): void {
    }

    obterQuadrinhos(){
        this.quadrinhos = this.quadrinhoService.obterQuadrinhos();         
    }
}