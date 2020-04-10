import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-keyword-card',
    template: `
        <a routerLink='keyworddetails/{{keywordObj._id.$oid}}' routerLinkActive=''>
            <div class='card' style="padding: 7px">
                <strong>{{keywordObj.name}}</strong>
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
