import {Item} from "./Item";
/**
 * Created by rattlehead on 13/2/17.
 */


export class Section {

    _id: string = '';
	title: string = 'Title';
	description: string = '';
	showDesc:boolean = true;
	buttonTitle:string = 'Next';
	previousIcons:string[] = [];
	icon:string = '';
	showIcon:boolean = true;
	defaultClass: string = '';
	fullWidth:boolean = false;
	order: string = '';
	visible: boolean = true;
	type: string = '';
	items: Item[] = [];


    constructor(title?: string) {
        this.title = title;
    }

    //add items to page
    public addItems(...items: any[]) {
        for (let item in items) {
            console.log(items[item]);
    //       items[item].order = this.items.length + 1;
            this.items.push(items[item]);
        }
    }

    public setVisibility(visible: boolean) {
        this.visible = visible;
    }
}