import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./comic-detail.component.html",
})
export class ComicDetailComponent implements OnInit {


    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params["id"];
    }
}
