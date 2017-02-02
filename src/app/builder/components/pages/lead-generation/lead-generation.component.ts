import { Component, OnInit,AfterViewInit} from '@angular/core';
declare var jQuery:any;
@Component({
  selector: 'lead-generation',
  templateUrl: './lead-generation.component.html',
})
export class LeadGenerationComponent implements OnInit,AfterViewInit {
ngAfterViewInit(){
}
  constructor() { }

  ngOnInit() {
  }
  checkforSelection(event){
    if(window.getSelection().toString()){
      
      console.log("jdjd"+window.getSelection().getRangeAt(0).startOffset+window.getSelection);
     console.log( jQuery(event.target).text().slice(window.getSelection().getRangeAt(0).startOffset,
    window.getSelection().getRangeAt(0).endOffset));
    var startIndex = window.getSelection().getRangeAt(0).startOffset;
    var endIndex = window.getSelection().getRangeAt(0).endOffset;
    var slicedText = jQuery(event.target).text().slice(startIndex, endIndex);
    var text=window.getSelection().toString();
    jQuery(event.target).html(jQuery(event.target).text().replace(slicedText,'<span id='+window.getSelection()+'>' + slicedText + '</span>'));
     
     console.log(text);
      jQuery("#"+text).toolbar({
        content: '#toolbar-options',
        event:'select'
      });
    }
  // var start = 0, end = 0;
  //   var sel, range, priorRange;
  //   range = window.getSelection().getRangeAt(0);
  //       priorRange = range.cloneRange();
  //       priorRange.selectNodeContents(event.target);
  //       priorRange.setEnd(range.startContainer, range.startOffset);
  //       start = priorRange.toString().length;
  //       end = start + range.toString().length;
  //       console.log(start);
      
  }
}
