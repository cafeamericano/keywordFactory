import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-all-keywords',
    template: `

        <div *ngIf="serverResponded; else loadingScreen">
            <section class='container animated fadeInLeft'>

                <h6>Languages</h6>
                <hr/>
                <div class='row'>
                    <div *ngFor='let item of allKeywordsArray'>
                        <div *ngIf="item.type == 'language'">
                            <section class='col s6 m6 l4 xl3'>
                                <app-keyword-card [keywordObj]="item"></app-keyword-card>
                            </section>
                        </div>
                    </div>
                </div>

                <h6>Libraries</h6>
                <hr/>
                <div class='row'>
                    <div *ngFor='let item of allKeywordsArray'>
                        <div *ngIf="item.type == 'library'">
                            <section class='col s6 m6 l4 xl3'>
                                <app-keyword-card [keywordObj]="item"></app-keyword-card>
                            </section>
                        </div>
                    </div>
                </div>

                <h6>Front End Frameworks</h6>
                <hr/>
                <div class='row'>
                    <div *ngFor='let item of allKeywordsArray'>
                        <div *ngIf="item.type == 'front-end-framework'">
                            <section class='col s6 m6 l4 xl3'>
                                <app-keyword-card [keywordObj]="item"></app-keyword-card>
                            </section>
                        </div>
                    </div>
                </div>

                <h6>Back End Frameworks</h6>
                <hr/>
                <div class='row'>
                    <div *ngFor='let item of allKeywordsArray'>
                        <div *ngIf="item.type == 'back-end-framework'">
                            <section class='col s6 m6 l4 xl3'>
                                <app-keyword-card [keywordObj]="item"></app-keyword-card>
                            </section>
                        </div>
                    </div>
                </div>

                <h6>Databases</h6>
                <hr/>
                <div class='row'>
                    <div *ngFor='let item of allKeywordsArray'>
                        <div *ngIf="item.type == 'database'">
                            <section class='col s6 m6 l4 xl3'>
                                <app-keyword-card [keywordObj]="item"></app-keyword-card>
                            </section>
                        </div>
                    </div>
                </div>

                <h6>ORMs</h6>
                <hr/>
                <div class='row'>
                    <div *ngFor='let item of allKeywordsArray'>
                        <div *ngIf="item.type == 'orm'">
                            <section class='col s6 m6 l4 xl3'>
                                <app-keyword-card [keywordObj]="item"></app-keyword-card>
                            </section>
                        </div>
                    </div>
                </div>

                <h6>Deployment Technologies</h6>
                <hr/>
                <div class='row'>
                    <div *ngFor='let item of allKeywordsArray'>
                        <div *ngIf="item.type == 'deployment'">
                            <section class='col s6 m6 l4 xl3'>
                                <app-keyword-card [keywordObj]="item"></app-keyword-card>
                            </section>
                        </div>
                    </div>
                </div>

                <h6>Other</h6>
                <hr/>
                <div class='row'>
                    <div *ngFor='let item of allKeywordsArray'>
                        <div *ngIf="item.type == 'other'">
                            <section class='col s6 m6 l4 xl3'>
                                <app-keyword-card [keywordObj]="item"></app-keyword-card>
                            </section>
                        </div>
                    </div>
                </div>

            </section>
        </div>
        
        <ng-template #loadingScreen>
            <section class='center-content h-90'>
                <div class='container'>
                    <div style='text-align: center'>Loading keyword data...</div>
                    <div class="progress">
                        <div class="indeterminate"></div>
                    </div>
                </div>
            </section>
        </ng-template>

    `,
    styles: []
})

export class AllKeywordsComponent implements OnInit {

    allKeywordsArray: any;
    serverResponded: any;

	constructor() {
        this.serverResponded = false;
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
                this.serverResponded = true;
            });
    }

}
