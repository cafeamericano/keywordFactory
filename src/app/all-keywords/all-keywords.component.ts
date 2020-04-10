import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-keywords',
  template: `
    <p>
      all-keywords works!
    </p>
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
