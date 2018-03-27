"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var ComicListComponent = /** @class */ (function () {
    function ComicListComponent() {
        this.comics = [];
    }
    ComicListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.comicsObserver = this.comicData.subscribe(function (comicData) {
            _this.comics = comicData.data.results;
        });
    };
    ComicListComponent.prototype.ngOnDestroy = function () {
        this.comicsObserver.unsubscribe();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Observable_1.Observable)
    ], ComicListComponent.prototype, "comicData", void 0);
    ComicListComponent = __decorate([
        core_1.Component({
            selector: "app-comic-list",
            moduleId: module.id,
            templateUrl: "./comic-list.component.html",
            styleUrls: ['./comic-list.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], ComicListComponent);
    return ComicListComponent;
}());
exports.ComicListComponent = ComicListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29taWMtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21pYy1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRjtBQUUxRiw4Q0FBNkM7QUFVN0M7SUFRSTtRQUpPLFdBQU0sR0FBWSxFQUFFLENBQUM7SUFJWixDQUFDO0lBRWpCLHFDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBQSxTQUFTO1lBQ25ELEtBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBRUQsd0NBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQWhCRDtRQURDLFlBQUssRUFBRTtrQ0FDVSx1QkFBVTt5REFBWTtJQUYvQixrQkFBa0I7UUFQOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7U0FFN0MsQ0FBQzs7T0FDVyxrQkFBa0IsQ0FtQjlCO0lBQUQseUJBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgT25EZXN0cm95LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29taWMsIENvbWljRGF0YSB9IGZyb20gJy4vLi4vLi4vY29yZS9tb2RlbC9tYXJ2ZWwvJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhcHAtY29taWMtbGlzdFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jb21pYy1saXN0LmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vY29taWMtbGlzdC5jb21wb25lbnQuc2NzcyddXG5cbn0pIFxuZXhwb3J0IGNsYXNzIENvbWljTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95e1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNvbWljRGF0YTogT2JzZXJ2YWJsZTxDb21pY0RhdGE+O1xuICAgIFxuICAgIHB1YmxpYyBjb21pY3M6IENvbWljW10gPSBbXTtcblxuICAgIHByaXZhdGUgY29taWNzT2JzZXJ2ZXI6IFN1YnNjcmlwdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICB0aGlzLmNvbWljc09ic2VydmVyID0gdGhpcy5jb21pY0RhdGEuc3Vic2NyaWJlKGNvbWljRGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbWljcyA9IGNvbWljRGF0YS5kYXRhLnJlc3VsdHM7XG4gICAgICAgfSlcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb21pY3NPYnNlcnZlci51bnN1YnNjcmliZSgpO1xuICAgIH1cbn0gIl19