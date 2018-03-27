"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var nativescript_vibrate_1 = require("nativescript-vibrate");
var ComicListComponent = /** @class */ (function () {
    function ComicListComponent(datePipe, vibrate) {
        this.datePipe = datePipe;
        this.vibrate = vibrate;
        this.onSearch = new core_1.EventEmitter();
        this.onLongPress = new core_1.EventEmitter();
        this.onTap = new core_1.EventEmitter();
    }
    ComicListComponent.prototype.ngOnInit = function () { };
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
        this.vibrate.vibrate([1000]);
        this.onLongPress.emit(quadrinho);
    };
    ComicListComponent.prototype.tap = function (quadrinho) {
        this.onTap.emit(quadrinho);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], ComicListComponent.prototype, "comics", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ComicListComponent.prototype, "onSearch", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ComicListComponent.prototype, "onLongPress", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ComicListComponent.prototype, "onTap", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29taWMtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21pYy1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUFvSDtBQUlwSCwwQ0FBMkM7QUFHM0MsNkRBQStDO0FBUS9DO0lBZ0JJLDRCQUFvQixRQUFrQixFQUFVLE9BQWdCO1FBQTVDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBVnpELGFBQVEsR0FBeUIsSUFBSSxtQkFBWSxFQUFVLENBQUM7UUFHNUQsZ0JBQVcsR0FBc0IsSUFBSSxtQkFBWSxFQUFPLENBQUM7UUFHekQsVUFBSyxHQUFzQixJQUFJLG1CQUFZLEVBQU8sQ0FBQztJQUlVLENBQUM7SUFFckUscUNBQVEsR0FBUixjQUFtQixDQUFDO0lBRXBCLG1DQUFNLEdBQU4sVUFBTyxJQUFZO1FBQ2YsSUFBSSxjQUFjLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDakUsQ0FBQztRQUVELE1BQU0sQ0FBQyxlQUFlLENBQUM7SUFDM0IsQ0FBQztJQUVELG1DQUFNLEdBQU4sVUFBTyxJQUFJO1FBQ1AsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxJQUFJLFdBQVcsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxzQ0FBUyxHQUFULFVBQVUsU0FBZ0I7UUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxnQ0FBRyxHQUFILFVBQUksU0FBZ0I7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQXhDRDtRQURDLFlBQUssRUFBRTs7c0RBQ2U7SUFHdkI7UUFEQyxhQUFNLEVBQUU7a0NBQ1EsbUJBQVk7d0RBQXNDO0lBR25FO1FBREMsYUFBTSxFQUFFO2tDQUNXLG1CQUFZOzJEQUFnQztJQUdoRTtRQURDLGFBQU0sRUFBRTtrQ0FDSyxtQkFBWTtxREFBZ0M7SUFaakQsa0JBQWtCO1FBUDlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1NBRTdDLENBQUM7eUNBaUJnQyxpQkFBUSxFQUFtQiw4QkFBTztPQWhCdkQsa0JBQWtCLENBNEM5QjtJQUFELHlCQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7QUE1Q1ksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUXVhZHJpbmhvU2VydmljZSB9IGZyb20gJy4vLi4vLi4vLi4vcGxhdGZvcm1zL2FuZHJvaWQvYXBwL2J1aWxkL2ludGVybWVkaWF0ZXMvYXNzZXRzL2RlYnVnL2FwcC9jb3JlL3NlcnZpY2UvcXVhZHJpbmhvLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIE9uRGVzdHJveSwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29taWMsIENvbWljRGF0YSB9IGZyb20gJy4vLi4vLi4vY29yZS9tb2RlbC9tYXJ2ZWwvJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInVpL3NlYXJjaC1iYXJcIjtcbmltcG9ydCB7IEdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcbmltcG9ydCB7IFZpYnJhdGUgfSBmcm9tICduYXRpdmVzY3JpcHQtdmlicmF0ZSc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhcHAtY29taWMtbGlzdFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jb21pYy1saXN0LmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vY29taWMtbGlzdC5jb21wb25lbnQuc2NzcyddXG5cbn0pIFxuZXhwb3J0IGNsYXNzIENvbWljTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY29taWNzOiBDb21pY1tdO1xuICAgIFxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvblNlYXJjaDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgICBcbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25Mb25nUHJlc3M6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uVGFwOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgcHJpdmF0ZSBjb21pY3NPYnNlcnZlcjogU3Vic2NyaXB0aW9uO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlUGlwZTogRGF0ZVBpcGUsIHByaXZhdGUgdmlicmF0ZTogVmlicmF0ZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHsgfVxuXG4gICAgdG9EYXRlKGRhdGE6IHN0cmluZyk6c3RyaW5nIHtcbiAgICAgICAgbGV0IGRhdGFDb252ZXJ0aWRhID0gbmV3IERhdGUoZGF0YSk7XG5cbiAgICAgICAgaWYgKCFpc05hTihkYXRhQ29udmVydGlkYS5nZXREYXRlKCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0oZGF0YUNvbnZlcnRpZGEsICdkZC1NTS15eXl5Jyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJ0RhdGEgaW52w6FsaWRhJztcbiAgICB9XG5cbiAgICBzZWFyY2goYXJncykgeyBcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XG4gICAgICAgIGxldCBzZWFyY2hWYWx1ZSA9IHNlYXJjaEJhci50ZXh0O1xuICAgICAgICB0aGlzLm9uU2VhcmNoLmVtaXQoc2VhcmNoVmFsdWUpO1xuICAgIH1cblxuICAgIGxvbmdQcmVzcyhxdWFkcmluaG86IENvbWljKSB7XG4gICAgICAgIHRoaXMudmlicmF0ZS52aWJyYXRlKFsxMDAwXSk7XG4gICAgICAgIHRoaXMub25Mb25nUHJlc3MuZW1pdChxdWFkcmluaG8pO1xuICAgIH1cblxuICAgIHRhcChxdWFkcmluaG86IENvbWljKSB7XG4gICAgICAgIHRoaXMub25UYXAuZW1pdChxdWFkcmluaG8pO1xuICAgIH1cbn0gIl19