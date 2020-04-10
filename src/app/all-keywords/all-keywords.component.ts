import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-all-keywords',
    template: `
        <section class='container'>
            <div class='row'>
                <div class='col s12 m6 l4 xl3' ngclass='keywordObj' *ngFor='let item of allKeywordsArray'>
                    <app-keyword-card [keywordObj]="item"></app-keyword-card>
                </div>
            </div>
        </section>
    `,
    styles: []
})

export class AllKeywordsComponent implements OnInit {

	allKeywordsArray: any;

	constructor() {
		this.ngOnInit();
	}

  	ngOnInit = () => {
        var rootUrl = 'https://central-api-flask-cm6ud432ka-uc.a.run.app';
        fetch(rootUrl + `/AppGalleryLite/api/keywords`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.allKeywordsArray = data;
            });
    }

}
