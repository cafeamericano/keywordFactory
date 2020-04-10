import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-keyword-details',
  template: `
    <section class='center-content h-90'>
        <div class='card container p-2' style='width: 350px'>

            <div *ngIf=keywordInformation class="row">
                <input
                    value="{{keywordInformation.name}}" 
                    id="first_name2" 
                    type="text" 
                    class="validate"
                >
                <label 
                    class="active" 
                    for="first_name2"
                >
                    Keyword Label
                </label>
            </div>

            <div class="row">
                <label>Keyword Type</label>
                <select class="browser-default">
                    <option value="" disabled selected>Select type</option>
                    <option 
                        *ngFor='let item of this.possibleKeywordTypes'
                        id={{item.value}}
                        value={{item.value}}
                    >
                        {{item.label}}
                    </option>
                </select>
            </div>

            <div class="row" style="text-align: center">
                <a class="m-1 waves-effect waves-light btn red lighten-2">Delete</a>
                <a class="m-1 waves-effect waves-light btn blue-grey lighten-3">Cancel</a>
                <a class="m-1 waves-effect waves-light btn">Submit</a>
            </div>

        </div>
    </section>
  `,
  styles: []
})
export class KeywordDetailsComponent implements OnInit {

    keywordId: string;
    keywordInformation: any;
    possibleKeywordTypes: any;
    
    constructor(route: ActivatedRoute) { 
        route.params.subscribe(params => {
            console.log(params);
            this.keywordId = params.id;
        });
        route.queryParams.subscribe(qParams => {
            console.log(qParams);
        })
        this.ngOnInit();
    }
    
    ngOnInit = () => {

        this.definePossibleKeywordTypes();

        var rootUrl = 'https://central-api-flask-cm6ud432ka-uc.a.run.app';
        fetch(rootUrl + `/AppGalleryLite/api/keyword?id=` + this.keywordId)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.keywordInformation = data[0];
                this.applyPreselectedType();
            });
    }

    definePossibleKeywordTypes = () => {
        this.possibleKeywordTypes = [
            {label: "Language",                 value: 'language'},
            {label: "Library",                  value: 'library'},
            {label: "Front End Framework",      value: 'front-end-framework'},
            {label: "Back End Framework",       value: 'back-end-framework'},
            {label: "Database",                 value: 'database'},
            {label: "ORM",                      value: 'orm'},
            {label: "Deployment Technology",    value: 'deployment'},
            {label: "Other",                    value: 'other'}
        ]
    }

    applyPreselectedType = () => {
        if (this.keywordInformation && this.keywordInformation.type) {
            document.getElementById(this.keywordInformation.type).setAttribute('selected','')
        }
    }

}
