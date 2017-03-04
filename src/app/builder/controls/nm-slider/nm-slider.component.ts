import {Component, OnInit, Input, AfterViewInit} from "@angular/core";
import {Helper} from "../helpers/helper";
import {Emitter} from "../../services/emitter.service";
declare var jQuery: any;
@Component({
    selector: 'nm-slider',
    template: `
    <div class="dropdown" style="position:absolute;left:20px;top:20px;">
                            <button class="btn bmd-btn-icon dropdown-toggle btn-edits" type="button" id="ex1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="material-icons">more_vert</i>
                            </button>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="ex1">
                                <div *ngFor="let obj of specifier">
                                   
                                    <input class="dropdown-item" #inputValue [placeholder]="obj.placeholder" style="margin:5px;width:90%;height:20px"
                                     (blur)="updateSlider(obj.key,obj.dataValue,inputValue)">
                                </div>
                            </div>
    </div>
    <div style="position:relative">
      <input type="text" id="{{data._id}}" name="example_name" value="" />
     </div> 
    <br/>
    <div style="clear:both"></div>
   
 `,
    styles: []
})
export class NmSlider extends Helper implements OnInit,AfterViewInit {
    specifier: Array<Object> = [];
    @Input() isVisible: boolean = false;
    @Input() data: any;

    constructor(private _confirmation: Emitter) {
        super();
    }

    ngOnInit() {
        this.specifier = [
            {key: "from", dataValue: "defaultValue", placeholder: "Default Value", visible: false},
            {key: "min", dataValue: "minVal", placeholder: "Min Value", visible: false},
            {key: "max", dataValue: "maxVal", placeholder: "Max Value", visible: false},
            {key: "step", dataValue: "steps", placeholder: "Steps", visible: false},
        ]
    }

    ngAfterViewInit() {
        let self = this;
        let id = this.data._id;
        this._confirmation.getAsObservables().subscribe((data) => {

            jQuery("#" + id).ionRangeSlider({
                hide_min_max: false, keyboard: false, min: self.data.props.minVal,
                max: self.data.props.maxVal, from: self.data.props.defaultValue,
                type: 'single', step: self.data.props.steps, prefix: "$",
                grid: true,
                onFinish: function (data) {
                    this.startValue = data.from;
                    console.log("onFinish", data);
                },
                onUpdate: function (data) {
                    console.log("onUpdate", data);
                }

            });
        });
    }

    updateSlider(key: string, dataUpdater: string, currentTag) {
        let id = this.data._id;
        let a = jQuery("#" + id).data('ionRangeSlider');
        console.log(key);
        let data = {};
        data[key] = currentTag.value;
        a.update(data);
        this.data.props[dataUpdater] = currentTag.value;
        console.log(this.data.props[dataUpdater]);
        console.log(this.data);
        this.emitChanges("done");
    }
}
