import { Component, OnInit, Input, Output, OnDestroy, EventEmitter } from "@angular/core";
import { Comic, ComicData } from './../../core/model/marvel/';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: "app-comic-list",
    moduleId: module.id,
    templateUrl: "./comic-list.component.html",
    styleUrls: ['./comic-list.component.scss']

}) 
export class ComicListComponent implements OnInit, OnDestroy{
    @Input()
    public comicData: Observable<ComicData>;
    
    public comics: Comic[] = [];

    private comicsObserver: Subscription;

    constructor() { }

    ngOnInit(): void {
       this.comicsObserver = this.comicData.subscribe(comicData => {
            this.comics = comicData.data.results;
       })
    }

    ngOnDestroy(): void {
        this.comicsObserver.unsubscribe();
    }
} 