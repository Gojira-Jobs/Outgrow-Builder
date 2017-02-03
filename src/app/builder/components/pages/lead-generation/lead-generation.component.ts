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
    if(window.getSelection() && window.getSelection().toString().length>0){
          var selection = window.getSelection(),      // get the selection then
          range = selection.getRangeAt(0),        // the range at first selection group
          rect = range.getBoundingClientRect();
          console.log(rect);
          var div=document.getElementById("toolbar-options");
          console.log(div);
          //if(div.style.display == 'none'){
            div.style.display='block';
            div.style.position='absolute';
            div.style.top = Math.abs(rect.top-rect.height) + 'px';       // set coordinates
            div.style.left = rect.left + 'px';
            //div.id="abc";
            div.style.height = rect.height + 'px'; // and size
            div.style.width = '100px';
         // }
          
    }
//     var div = document.createElement('div'); 
//       // make box
// div.style.border = '2px solid black';      // with outline
// div.style.position = 'absolute';              // fixed positioning = easy mode
// div.style.top = rect.top + 'px';       // set coordinates
// div.style.left = rect.left + 'px';
// div.id="abc";
// div.style.height = rect.height + 'px'; // and size
// div.style.width = rect.width + 'px';
// document.body.appendChild(div);
// setTimeout(function(){
//   document.getElementById("abc").remove();
// },1000);  

    // console.log(jQuery(event.target.selectionStart))
    // if(window.getSelection().toString()){
    //   var previousId='';
    //   console.log("jdjd"+window.getSelection().getRangeAt(0).startOffset+window.getSelection);
    //  console.log( jQuery(event.target).text().slice(window.getSelection().getRangeAt(0).startOffset,
    // window.getSelection().getRangeAt(0).endOffset));
    
    //     var startIndex = window.getSelection().getRangeAt(0).startOffset;
    //     var endIndex = window.getSelection().getRangeAt(0).endOffset;
    //     console.log(startIndex+" "+endIndex);
    //     var slicedText = jQuery(event.target).text().slice(startIndex, endIndex);
    //     var text=window.getSelection().toString();
    //     console.log(slicedText);
    //     jQuery(event.target)
    //     .html(jQuery(event.target)
    //     .text().replace(slicedText,'<span id='+window.
    //     getSelection()+'>' + slicedText + '</span>'));
   
    //  console.log(text);
    //   jQuery("#"+text).toolbar({
    //     content: '#toolbar-options'
    //   });

    //}
  }
}


    


