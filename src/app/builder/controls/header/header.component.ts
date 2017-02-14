import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'og-header',
  template: `
    <div >
      <h1 id="main-heading" class="main-head" [froalaEditor]="options"
                    [(froalaModel)]="data.name">
      </h1>
    </div>
  `,
  styles: []
})
export class Header implements OnInit {
  @Input() data:any;
  mainheading:any="";
public options: Object = {
        placeholderText: 'Edit Your Content Here!',
        toolbarInline: true,
        charCounterCount: false,
        toolbarButtons: ['bold', 'italic', 'underline', 'color', 'html', 'clearFormatting','paragraphFormat'],
    };
  constructor() { }

  ngOnInit() {
  }

}
