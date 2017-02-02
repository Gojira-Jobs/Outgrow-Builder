import { Component, OnInit,AfterViewInit} from '@angular/core';
declare var jQuery:any;
@Component({
    selector: 'lead-generation',
    templateUrl: './lead-generation.component.html',
})

export class LeadGenerationComponent implements OnInit,AfterViewInit {
  
    mainHeading: string;
    subHeading: string;
    nameInputBox: string;
    emailInputBox: string;
    button: string;

   
    private initializeViewContent() {
        this.mainHeading = "Calculate the risk of you getting a heart disease.";
        this.subHeading = "Heart problems are at an all time high. See if your lifestyle makes you susceptible.";
        this.nameInputBox = "John Doe"
        this.emailInputBox = "John@outgrow.co";
        this.button = "Estimate Costs";
    }
  ngAfterViewInit(){
  }
  constructor() { }

  ngOnInit() {
        this.initializeViewContent();
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
  }
}


    


