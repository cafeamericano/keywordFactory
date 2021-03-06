import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-keyword-details',
  template: `
    <section class='center-content h-90 animated fadeInDown'>
        <div class='card container p-2' style='width: 350px'>

            <div class="row">
                <span *ngIf="keywordInformation; else elseBlock1">
                    <input
                    value="{{keywordInformation.name}}" 
                    id="keywordName" 
                    type="text" 
                    class="validate"
                >
                </span>
                <ng-template #elseBlock1>
                    <input
                        value="" 
                        placeholder="Keyword Name"
                        id="keywordName" 
                        type="text" 
                        class="validate"
                    >
                </ng-template>
            </div>

            <div class="row">
                <label>Keyword Type</label>
                <select id='keywordSelectedType' class="browser-default">
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

            <div class="row">
                <label>Show in App Gallery</label>
                <select id='keywordShowInGallery' class="browser-default">
                    <option value="" disabled selected>Select status</option>
                    <option 
                        *ngFor='let item of this.possibleDisplayStatuses'
                        id={{item.value}}
                        class={{item.value}}
                        value={{item.value}}
                    >
                        {{item.label}}
                    </option>
                </select>
            </div>

            <div class="row">
                <label>Show on Portfolio</label>
                <select id='keywordShowOnPortfolio' class="browser-default">
                    <option value="" disabled selected>Select status</option>
                    <option 
                        *ngFor='let item of this.possibleDisplayStatuses'
                        id={{item.value}}
                        class={{item.value}}
                        value={{item.value}}
                    >
                        {{item.label}}
                    </option>
                </select>
            </div>

            <div class="row" style="text-align: center">
                <a *ngIf="keywordInformation" (click)="processDelete()" class="m-1 waves-effect waves-light btn red lighten-2">Delete</a>
                <a (click)="processCancel()" class="m-1 waves-effect waves-light btn blue-grey lighten-3">Cancel</a>
                <span *ngIf="keywordId; else elseBlock2">
                    <a (click)="processUpdate()" class="m-1 waves-effect waves-light btn">Update</a>
                </span>
                <ng-template #elseBlock2>
                    <a (click)="processCreate()" class="m-1 waves-effect waves-light btn">Add</a>
                </ng-template>
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
    possibleDisplayStatuses: any;

    constructor(route: ActivatedRoute, private location: Location) { 
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
        this.definePossibleDisplayStatuses();
        if (this.keywordId) {
            this.processRead();
        }
    }

    definePossibleDisplayStatuses = () => {
        this.possibleDisplayStatuses = [
            {label: "Show",                     value: "true"},
            {label: "Hide",                     value: "false"}
        ]
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
            {label: "Operating System",         value: 'operating-system'},
            {label: "Other",                    value: 'other'}
        ]
    }

    applyPreselectedKeywordType = () => {
        if (this.keywordInformation && this.keywordInformation.type) {
            document.getElementById(this.keywordInformation.type).setAttribute('selected','')
        }
    }

    applyPreselectedDisplayStatus = () => {
        if (this.keywordInformation) {
            console.log(this.keywordInformation)
            console.log(document.getElementById('keywordShowInGallery'))
            document.getElementById('keywordShowInGallery').querySelector(`.${this.keywordInformation.showInGallery}`).setAttribute('selected','');
            document.getElementById('keywordShowOnPortfolio').querySelector(`.${this.keywordInformation.showOnPortfolio}`).setAttribute('selected','');
        }
    }

    processRead() {
        var rootUrl = 'https://central-api-go.appspot.com';
        fetch(rootUrl + `/KeywordFactory/api/keyword?id=` + this.keywordId)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.keywordInformation = data[0];
                this.applyPreselectedKeywordType();
                this.applyPreselectedDisplayStatus();
            });
    }

    processCreate() {
        var rootUrl = 'https://central-api-go.appspot.com';
        var url = rootUrl + '/KeywordFactory/api/keyword'
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: (<HTMLInputElement>document.getElementById('keywordName')).value,
                type: (<HTMLInputElement>document.getElementById('keywordSelectedType')).value,
                showInGallery: (<HTMLInputElement>document.getElementById('keywordShowInGallery')).value == "true",
                showOnPortfolio: (<HTMLInputElement>document.getElementById('keywordShowOnPortfolio')).value == "true"

            })
        }).then(response => {
            this.location.back();
        });
    }

    processUpdate() {
        var rootUrl = 'https://central-api-go.appspot.com';
        var url = rootUrl + '/KeywordFactory/api/keyword'
        fetch(url, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                _id: this.keywordId,
                name: (<HTMLInputElement>document.getElementById('keywordName')).value,
                type: (<HTMLInputElement>document.getElementById('keywordSelectedType')).value,
                showInGallery: (<HTMLInputElement>document.getElementById('keywordShowInGallery')).value == "true",
                showOnPortfolio: (<HTMLInputElement>document.getElementById('keywordShowOnPortfolio')).value == "true"

            })
        }).then(response => {
            this.location.back();
        });
    }

    processDelete() {
        var rootUrl = 'https://central-api-go.appspot.com';
        var url = rootUrl + '/KeywordFactory/api/keyword'
        fetch(url, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                _id: this.keywordId
            })
        }).then(response => {
            this.location.back();
        });
    }

    processCancel() {
        this.location.back();
    }

}
