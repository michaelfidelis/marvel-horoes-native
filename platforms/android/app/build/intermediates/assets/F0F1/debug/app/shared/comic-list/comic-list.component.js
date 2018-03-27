"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var common_1 = require("@angular/common");
var nativescript_vibrate_1 = require("nativescript-vibrate");
var ComicListComponent = /** @class */ (function () {
    function ComicListComponent(datePipe, vibrate) {
        this.datePipe = datePipe;
        this.vibrate = vibrate;
        this.onSearch = new core_1.EventEmitter();
        this.onLongPress = new core_1.EventEmitter();
        this.comics = [];
    }
    ComicListComponent.prototype.ngOnInit = function () { };
    ComicListComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        this.comicsObserver = this.comicData.subscribe(function (comicData) {
            _this.comics = comicData.data.results;
        });
    };
    ComicListComponent.prototype.ngOnDestroy = function () {
        this.comicsObserver.unsubscribe();
    };
    ComicListComponent.prototype.toDate = function (data) {
        var dataConvertida = new Date(data);
        if (!isNaN(dataConvertida.getDate())) {
            return this.datePipe.transform(dataConvertida, 'dd-MM-yyyy');
        }
        return 'Data inválida';
    };
    ComicListComponent.prototype.search = function (args) {
        var searchBar = args.object;
        var searchValue = searchBar.text;
        this.onSearch.emit(searchValue);
    };
    ComicListComponent.prototype.longPress = function (quadrinho) {
        console.log("LongPress!");
        console.log("Object that triggered the event: " + quadrinho);
        console.log("View that triggered the event: " + quadrinho);
        console.log("Event name: " + quadrinho);
        this.onLongPress.emit(quadrinho);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Observable_1.Observable)
    ], ComicListComponent.prototype, "comicData", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ComicListComponent.prototype, "onSearch", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ComicListComponent.prototype, "onLongPress", void 0);
    ComicListComponent = __decorate([
        core_1.Component({
            selector: "app-comic-list",
            moduleId: module.id,
            templateUrl: "./comic-list.component.html",
            styleUrls: ['./comic-list.component.scss']
        }),
        __metadata("design:paramtypes", [common_1.DatePipe, nativescript_vibrate_1.Vibrate])
    ], ComicListComponent);
    return ComicListComponent;
}());
exports.ComicListComponent = ComicListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29taWMtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21pYy1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvSDtBQUVwSCw4Q0FBNkM7QUFFN0MsMENBQTJDO0FBRzNDLDZEQUErQztBQVEvQztJQWVJLDRCQUFvQixRQUFrQixFQUFVLE9BQWdCO1FBQTVDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBVnpELGFBQVEsR0FBeUIsSUFBSSxtQkFBWSxFQUFVLENBQUM7UUFHNUQsZ0JBQVcsR0FBc0IsSUFBSSxtQkFBWSxFQUFPLENBQUM7UUFHekQsV0FBTSxHQUFZLEVBQUUsQ0FBQztJQUl3QyxDQUFDO0lBRXJFLHFDQUFRLEdBQVIsY0FBbUIsQ0FBQztJQUVwQix3Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFBbEMsaUJBSUM7UUFIRyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQUEsU0FBUztZQUNwRCxLQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQUVELHdDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxtQ0FBTSxHQUFOLFVBQU8sSUFBWTtRQUNmLElBQUksY0FBYyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXBDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ2pFLENBQUM7UUFFRCxNQUFNLENBQUMsZUFBZSxDQUFDO0lBQzNCLENBQUM7SUFFRCxtQ0FBTSxHQUFOLFVBQU8sSUFBSTtRQUNQLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkMsSUFBSSxXQUFXLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsc0NBQVMsR0FBVCxVQUFVLFNBQWdCO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsR0FBRyxTQUFTLENBQUMsQ0FBQztRQUM3RCxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBRXhDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFsREQ7UUFEQyxZQUFLLEVBQUU7a0NBQ1UsdUJBQVU7eURBQVk7SUFHeEM7UUFEQyxhQUFNLEVBQUU7a0NBQ1EsbUJBQVk7d0RBQXNDO0lBR25FO1FBREMsYUFBTSxFQUFFO2tDQUNXLG1CQUFZOzJEQUFnQztJQVJ2RCxrQkFBa0I7UUFQOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7U0FFN0MsQ0FBQzt5Q0FnQmdDLGlCQUFRLEVBQW1CLDhCQUFPO09BZnZELGtCQUFrQixDQXFEOUI7SUFBRCx5QkFBQztDQUFBLEFBckRELElBcURDO0FBckRZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBPbkRlc3Ryb3ksIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbWljLCBDb21pY0RhdGEgfSBmcm9tICcuLy4uLy4uL2NvcmUvbW9kZWwvbWFydmVsLyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gXCJ1aS9zZWFyY2gtYmFyXCI7XG5pbXBvcnQgeyBHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInVpL2dlc3R1cmVzXCI7XG5pbXBvcnQgeyBWaWJyYXRlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXZpYnJhdGUnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiYXBwLWNvbWljLWxpc3RcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY29taWMtbGlzdC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL2NvbWljLWxpc3QuY29tcG9uZW50LnNjc3MnXVxuXG59KSBcbmV4cG9ydCBjbGFzcyBDb21pY0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2Vze1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNvbWljRGF0YTogT2JzZXJ2YWJsZTxDb21pY0RhdGE+O1xuICAgIFxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvblNlYXJjaDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgICBcbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25Mb25nUHJlc3M6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgXG4gICAgXG4gICAgcHVibGljIGNvbWljczogQ29taWNbXSA9IFtdO1xuXG4gICAgcHJpdmF0ZSBjb21pY3NPYnNlcnZlcjogU3Vic2NyaXB0aW9uO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlUGlwZTogRGF0ZVBpcGUsIHByaXZhdGUgdmlicmF0ZTogVmlicmF0ZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHsgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbWljc09ic2VydmVyID0gdGhpcy5jb21pY0RhdGEuc3Vic2NyaWJlKGNvbWljRGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbWljcyA9IGNvbWljRGF0YS5kYXRhLnJlc3VsdHM7XG4gICAgICAgfSlcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb21pY3NPYnNlcnZlci51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHRvRGF0ZShkYXRhOiBzdHJpbmcpOnN0cmluZyB7XG4gICAgICAgIGxldCBkYXRhQ29udmVydGlkYSA9IG5ldyBEYXRlKGRhdGEpO1xuXG4gICAgICAgIGlmICghaXNOYU4oZGF0YUNvbnZlcnRpZGEuZ2V0RGF0ZSgpKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKGRhdGFDb252ZXJ0aWRhLCAnZGQtTU0teXl5eScpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICdEYXRhIGludsOhbGlkYSc7XG4gICAgfVxuXG4gICAgc2VhcmNoKGFyZ3MpIHtcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XG4gICAgICAgIGxldCBzZWFyY2hWYWx1ZSA9IHNlYXJjaEJhci50ZXh0O1xuICAgICAgICB0aGlzLm9uU2VhcmNoLmVtaXQoc2VhcmNoVmFsdWUpO1xuICAgIH1cblxuICAgIGxvbmdQcmVzcyhxdWFkcmluaG86IENvbWljKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9uZ1ByZXNzIVwiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJPYmplY3QgdGhhdCB0cmlnZ2VyZWQgdGhlIGV2ZW50OiBcIiArIHF1YWRyaW5obyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVmlldyB0aGF0IHRyaWdnZXJlZCB0aGUgZXZlbnQ6IFwiICsgcXVhZHJpbmhvKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJFdmVudCBuYW1lOiBcIiArIHF1YWRyaW5obyk7XG5cbiAgICAgICAgdGhpcy5vbkxvbmdQcmVzcy5lbWl0KHF1YWRyaW5obyk7XG4gICAgfVxufSAiXX0=