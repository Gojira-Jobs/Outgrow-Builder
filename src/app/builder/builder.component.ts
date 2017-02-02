import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builder',
  template: `
    <welcome></welcome>
    <question></question>
    <lead-generation></lead-generation>
  `,
  styles: []
})
export class BuilderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
