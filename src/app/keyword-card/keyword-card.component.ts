import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-keyword-card',
    template: `
        <a routerLink='keyworddetails/{{keywordObj._id.$oid || keywordObj._id}}' routerLinkActive=''>
        <div class='card' style="padding: 7px">
                <strong>{{keywordObj.name}}</strong>
                <hr/>
                <small>{{keywordObj.type}}</small>
                <br/>
                <small>{{keywordObj._id.$oid || keywordObj._id}}</small>
            </div>
        </a>
    `,
    styles: [],
})

export class KeywordCardComponent implements OnInit {

    @Input() // Must be here to pass data as keywordObj into this component
    keywordObj: any;

    constructor() { }

    ngOnInit(): void {
    }

}
