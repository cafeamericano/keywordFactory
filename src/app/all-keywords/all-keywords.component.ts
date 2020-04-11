import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-all-keywords',
    template: `

        <div *ngIf="serverResponded; else loadingScreen">
            <section class='container animated fadeInLeft'>

                <br/>
                <div style='text-align: right'><h6>Showing {{keywordCount}} keywords.</h6></div>
                <br/>

                <div class='keyword-section'>
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
                </div>

                <div class='keyword-section'>
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
                </div>

                <div class='keyword-section'>
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
                </div>
                
                <div class='keyword-section'>
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
                </div>

                <div class='keyword-section'>
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
                </div>

                <div class='keyword-section'>
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
                </div>

                <div class='keyword-section'>
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
                </div>

                <div class='keyword-section'>
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
                </div>
                
            </section>
        </div>
        
        <ng-template #loadingScreen>
            <section class='center-content h-90'>
                <div class='container'>
                    <div style='text-align: center'><h6>Loading keyword data...</h6></div>
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
    keywordCount: any;
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
                this.keywordCount = data.length;
                this.serverResponded = true;
            });
    }

}
