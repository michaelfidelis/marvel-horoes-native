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
export class ComicListComponent implements OnInit, OnDestroy, OnChanges{
    @Input()
    public comicData: Observable<ComicData>;
    
    @Output()
    public onSearch: EventEmitter<string> = new EventEmitter<string>();
    
    @Output()
    public onLongPress: EventEmitter<any> = new EventEmitter<any>();
    
    
    public comics: Comic[] = [];

    private comicsObserver: Subscription;

    constructor(private datePipe: DatePipe, private vibrate: Vibrate) { }

    ngOnInit(): void { }

    ngOnChanges(changes: SimpleChanges): void {
        this.comicsObserver = this.comicData.subscribe(comicData => {
            this.comics = comicData.data.results;
       })
    }

    ngOnDestroy(): void {
        this.comicsObserver.unsubscribe();
    }

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
        console.log("LongPress!");
        console.log("Object that triggered the event: " + quadrinho);
        console.log("View that triggered the event: " + quadrinho);
        console.log("Event name: " + quadrinho);

        this.onLongPress.emit(quadrinho);
    }
} 