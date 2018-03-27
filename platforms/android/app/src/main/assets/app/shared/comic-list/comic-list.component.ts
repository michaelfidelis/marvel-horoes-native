import { QuadrinhoService } from './../../../platforms/android/app/build/intermediates/assets/debug/app/core/service/quadrinho.service';
import { Component, OnInit, Input, Output, OnDestroy, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";
import { Comic, ComicData } from './../../core/model/marvel/';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { DatePipe } from '@angular/common';
import { SearchBar } from "ui/search-bar";
import { GestureEventData } from "ui/gestures";
import { Vibrate } from 'nativescript-vibrate';
@Component({
    selector: "app-comic-list",
    moduleId: module.id,
    templateUrl: "./comic-list.component.html",
    styleUrls: ['./comic-list.component.scss']

}) 
export class ComicListComponent implements OnInit {
    
    @Input()
    public comics: Comic[];
    
    @Output()
    public onSearch: EventEmitter<string> = new EventEmitter<string>();
    
    @Output()
    public onLongPress: EventEmitter<any> = new EventEmitter<any>();
    
    @Output()
    public onTap: EventEmitter<any> = new EventEmitter<any>();

    private comicsObserver: Subscription;

    constructor(private datePipe: DatePipe, private vibrate: Vibrate) { }

    ngOnInit(): void { }

    toDate(data: string):string {
        let dataConvertida = new Date(data);

        if (!isNaN(dataConvertida.getDate())) {
            return this.datePipe.transform(dataConvertida, 'dd-MM-yyyy');
        }

        return 'Data inválida';
    }

    search(args) { 
        let searchBar = <SearchBar>args.object;
        let searchValue = searchBar.text;
        this.onSearch.emit(searchValue);
    }

    longPress(quadrinho: Comic) {
        this.vibrate.vibrate([1000]);
        this.onLongPress.emit(quadrinho);
    }

    tap(quadrinho: Comic) {
        this.onTap.emit(quadrinho);
    }
} 