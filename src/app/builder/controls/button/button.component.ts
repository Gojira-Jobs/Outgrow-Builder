import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'click-button',
  template: `
    <p>
      button Works!
    </p>
  `,
  styles: []
})
export class Button implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
