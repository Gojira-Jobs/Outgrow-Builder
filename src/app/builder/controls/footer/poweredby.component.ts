import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'poweredby',
    template: `
			<div class=" powered-by">
				<span>BUILT WITH</span>
				<a href="{{url}}" target="_blank">
						<img src="assets/images/builder/powered-by-logo.png" alt="Powered By">
				</a>
			</div>
	
  `,
    styles: []
})
export class Poweredby implements OnInit {
    @Input() data;

    constructor() {
    }

    ngOnInit() {
    }

}
