"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var core_2 = require("./../core");
var comic_list_component_1 = require("./comic-list/comic-list.component");
var comic_detail_component_1 = require("./comic-detail/comic-detail.component");
var common_2 = require("@angular/common");
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
                comic_list_component_1.ComicListComponent,
                comic_detail_component_1.ComicDetailComponent
            ],
            exports: [
                comic_list_component_1.ComicListComponent,
                comic_detail_component_1.ComicDetailComponent
            ],
            providers: [common_2.DatePipe],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLGtDQUF1QztBQUN2QywwRUFBc0U7QUFDdEUsZ0ZBQTRFO0FBQzVFLDBDQUEyQztBQW9CM0M7SUFBQTtJQUE0QixDQUFDO0lBQWhCLFlBQVk7UUFsQnhCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLGlCQUFVO2FBQ2I7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YseUNBQWtCO2dCQUNsQiw2Q0FBb0I7YUFDdkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wseUNBQWtCO2dCQUNsQiw2Q0FBb0I7YUFDdkI7WUFDRCxTQUFTLEVBQUUsQ0FBQyxpQkFBUSxDQUFDO1lBQ3JCLE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csWUFBWSxDQUFJO0lBQUQsbUJBQUM7Q0FBQSxBQUE3QixJQUE2QjtBQUFoQixvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICcuLy4uL2NvcmUnO1xuaW1wb3J0IHsgQ29taWNMaXN0Q29tcG9uZW50fSBmcm9tICcuL2NvbWljLWxpc3QvY29taWMtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29taWNEZXRhaWxDb21wb25lbnR9IGZyb20gJy4vY29taWMtZGV0YWlsL2NvbWljLWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIENvcmVNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBDb21pY0xpc3RDb21wb25lbnQsXG4gICAgICAgIENvbWljRGV0YWlsQ29tcG9uZW50XG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIENvbWljTGlzdENvbXBvbmVudCxcbiAgICAgICAgQ29taWNEZXRhaWxDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW0RhdGVQaXBlXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7IH1cbiJdfQ==