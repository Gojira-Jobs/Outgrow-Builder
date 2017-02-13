import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  template: `
    <p>
      header Works!
    </p>
  `,
  styles: []
})
export class Header implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
