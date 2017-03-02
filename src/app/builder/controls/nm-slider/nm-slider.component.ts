import { Component, OnInit,Input} from '@angular/core';
declare var jQuery:any;
@Component({
  selector: 'nm-slider',
  template: `
    <input type="text" id="example_id" name="example_name" value="" />
  `,
  styles: []
})
export class NmSlider implements OnInit {
  @Input() data:any;
  constructor() { }

  ngOnInit() {
    jQuery("#example_id").ionRangeSlider({
            hide_min_max: true,
            keyboard: true,
            min: 0,
            max: 5000,
            from: 1000,
            to: 4000,
            type: 'double',
            step: 1,
            prefix: "$",
            grid: true

            });
  }

}
