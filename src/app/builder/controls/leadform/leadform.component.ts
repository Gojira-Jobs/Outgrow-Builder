import {Component, OnInit, Input, ViewEncapsulation} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Helper} from "../helpers/helper";
@Component({
    selector: 'leadform',
    templateUrl: './leadform.component.html',
    encapsulation: ViewEncapsulation.None
})
export class LeadformComponent extends Helper implements OnInit {

    @Input() data;
    @Input() page;
    leadform: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        super();
    }

    ngOnInit() {
        if (this.data != undefined) {
            console.log(this.data);
            let obj: any = {};
            this.data.fields.forEach((item) => {
                let validations = new Array();
                validations.push(Validators.required);
                if (item.name == 'Email') validations.push(Validators
                    .pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/));
                obj[item.name] = new FormControl('',
                    Validators.compose(validations));
            })
            this.leadform = new FormGroup(obj);
            console.log(this.leadform.value);

        }
    }

    updateCaretAndPlaceholder(leadformInput, data, i) {
        let pos = this.getCaretPos(leadformInput);
        leadformInput.value = data.fields[i].placeholder;
        this.setSelectionRange(leadformInput, pos, pos);
    }

    getCaretPos(input): any {
        let caretPos;
        if (input.selectionStart || input.selectionStart == '0') {
            caretPos = input.selectionStart;
        }
        return caretPos;
    }

    setSelectionRange(input, selectionStart, selectionEnd) {
        if (input.setSelectionRange) {
            input.focus();
            input.setSelectionRange(selectionStart, selectionEnd);
        } else if (input.createTextRange) {
            var range = input.createTextRange();
            range.collapse(true);
            range.moveEnd('character', selectionEnd);
            range.moveStart('character', selectionStart);
            range.select();
        }
    }
}
