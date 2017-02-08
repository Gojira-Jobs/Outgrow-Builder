import {
    Directive,
    Input,
    OnChanges,
    Output,
    EventEmitter,
    ElementRef
} from '@angular/core';


import {SavePage} from "./services/savePage.service";
declare var jQuery: any;
@Directive({
    selector: '[editable]',
    host: {
        '(input)': 'onTyping()',
        '(mouseup)': 'onselection()',
        '(dblclick)':'onselection1()',
        '(blur)': 'onfocusOut()'
    }
})
export class EditableDirective implements OnChanges {
    @Input('editable') receivedData: any;
    @Output('editableChange') updatedText = new EventEmitter<any>();
    flag;
    previousText: any;

    ngOnChanges(changes) {
        if (changes.values != undefined && changes.values.currentValue != this.previousText) {
            this.previousText = this.receivedData;
            this.ele.nativeElement.innerHTML = this.receivedData;
        }
    }

    constructor(private ele: ElementRef, savePageService: SavePage) {
    }

    onselection() {
        //console.log("in mouse");
        var menu = jQuery('#highlight_menu');
        if (window.getSelection() && window.getSelection().toString().length > 0) {
            console.log("ffhhfhhhhfhhfhf");
            this.showMenu(menu);
        }
        else {
            this.hideMenu(menu);
        }
    }

    showMenu(menu) {
        console.log(document.getSelection().toString());
        var s = document.getSelection(),
            r = s.getRangeAt(0);
        if (r && s.toString()) {
            var p = r.getBoundingClientRect();
            if (p.left || p.top) {
                menu.css({
                    left: (p.left + (p.width / 2)) - (menu.width() / 2),
                    top: (p.top - menu.height() - 10),
                    display: 'block',
                    opacity: 0
                })
                    .animate({
                        opacity: 1
                    }, 300);

                setTimeout(function () {
                    console.log("Show div");
                    menu.addClass('highlight_menu_animate');
                }, 10);
                return;
            }
        }


    }

    hideMenu(menu) {
        console.log("In Hide Menu");
        menu.animate({opacity: 0}, function () {
            console.log("Hide div");
            menu.hide().removeClass('highlight_menu_animate');
        });
    }

    onTyping() {
       // this.sendChanges();
    }

    onfocusOut() {
        console.log("fkf");
        //this.sendChanges();
    }

    sendChanges() {
        this.receivedData = this.ele.nativeElement.innerHTML;

        this.previousText = this.receivedData;
        this.updatedText.emit(this.receivedData);
    }

}
