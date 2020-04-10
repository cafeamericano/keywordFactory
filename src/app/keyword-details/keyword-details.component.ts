import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-keyword-details',
  template: `
    <p>
      {{keywordId}}
    </p>
  `,
  styles: []
})
export class KeywordDetailsComponent implements OnInit {

    keywordId: string;
    
    constructor(route: ActivatedRoute) { 
        route.params.subscribe(params => {
            console.log(params);
            this.keywordId = params.id;
        });
        route.queryParams.subscribe(qParams => {
            console.log(qParams);
        })
    }
    
    ngOnInit(): void {
    }

}
