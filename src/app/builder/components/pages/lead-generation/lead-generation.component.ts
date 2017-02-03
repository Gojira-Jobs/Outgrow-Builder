import { Component, OnInit,AfterViewInit,EventEmitter} from '@angular/core';
declare var jQuery:any;
@Component({
    selector: 'lead-generation',
    templateUrl: './lead-generation.component.html',
    styles:[`.highlight_menu_animate {
  transition: top 75ms ease-out,left 75ms ease-out;
}
    `]
})

export class LeadGenerationComponent implements OnInit,AfterViewInit {
  
    mainHeading: string;
    subHeading: string;
    nameInputBox: string;
    emailInputBox: string;
    button: string;
    //idEmmitter:EventEmitter<any> = new EventEmitter<any>();
   element:Object;
   
    private initializeViewContent() {
        this.mainHeading = "Calculate the risk of you getting a heart disease.";
        this.subHeading = "Heart problems are at an all time high. See if your lifestyle makes you susceptible.";
        this.nameInputBox = "John Doe"
        this.emailInputBox = "John@outgrow.co";
        this.button = "Estimate Costs";
    }
  ngAfterViewInit(){}
  constructor() { }

  ngOnInit() {
        this.initializeViewContent();
    }
  checkforSelection(event){
        this.element=event.target;
        var menu=jQuery("#toolbar-options");
    if(window.getSelection() && window.getSelection().toString().length>0){
                   console.log(document.getElementById("toolbar-options"))
          var menu=jQuery("#toolbar-options");
          var s = document.getSelection();
		  		var r = s.getRangeAt(0);
          console.log(menu);
		  	if (r && s.toString()) {
			  	var p = r.getBoundingClientRect();
			  	if (p.left || p.top) {
				  	menu.css({
              display: 'block',
              position:'absolute',
					  	left: (p.left + (p.width / 2)) - (menu.width() / 2),
					  	top: (p.top - menu.height() - 10),
					  	opacity: 0
					})
					.animate({
						opacity:1
					}, 300);
					
					setTimeout(function() {
            console.log("dkdk");
						menu.addClass('highlight_menu_animate');
					}, 10);
					return;
				}
        
          
       }
    }
    else{
      menu.animate({ opacity:0 }, function () {
			  	menu.hide().removeClass('highlight_menu_animate');
			});
    }
}
format(event,type){
        var tag;
        if(type == 'bold') tag='b';
        if(type == 'italic') tag='i';
        if(type == 'underline') tag='u';
        var appended=document.createElement(tag);
        appended.textContent=window.getSelection().toString();
        var range = window.getSelection().getRangeAt(0);
          range.deleteContents();
          range.insertNode(appended);
}
}
