"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var core_2 = require("./../core");
var comic_list_component_1 = require("./comic-list/comic-list.component");
var common_2 = require("@angular/common");
var nativescript_vibrate_1 = require("nativescript-vibrate");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                core_2.CoreModule
            ],
            declarations: [
                comic_list_component_1.ComicListComponent
            ],
            exports: [
                comic_list_component_1.ComicListComponent
            ],
            providers: [common_2.DatePipe, nativescript_vibrate_1.Vibrate],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLGtDQUF1QztBQUN2QywwRUFBc0U7QUFDdEUsMENBQTJDO0FBQzNDLDZEQUErQztBQWtCL0M7SUFBQTtJQUE0QixDQUFDO0lBQWhCLFlBQVk7UUFoQnhCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLGlCQUFVO2FBQ2I7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YseUNBQWtCO2FBQ3JCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHlDQUFrQjthQUNyQjtZQUNELFNBQVMsRUFBRSxDQUFDLGlCQUFRLEVBQUUsOEJBQU8sQ0FBQztZQUM5QixPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFlBQVksQ0FBSTtJQUFELG1CQUFDO0NBQUEsQUFBN0IsSUFBNkI7QUFBaEIsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnLi8uLi9jb3JlJztcbmltcG9ydCB7IENvbWljTGlzdENvbXBvbmVudH0gZnJvbSAnLi9jb21pYy1saXN0L2NvbWljLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgVmlicmF0ZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdmlicmF0ZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBDb3JlTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQ29taWNMaXN0Q29tcG9uZW50XG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIENvbWljTGlzdENvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbRGF0ZVBpcGUsIFZpYnJhdGVdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHsgfVxuICJdfQ==