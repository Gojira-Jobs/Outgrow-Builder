import {Item} from "./Item";
/**
 * Created by rattlehead on 13/2/17.
 */


export class Section {

    title: string;
    visible: boolean = true;
    type: string = '';
    items: Item[] = [];

    constructor(title?: string) {
        this.title = title;
    }

    //add items to page
    public addItems(...items: any[]) {
        for (let item in items) {
            //       items[item].order = this.items.length + 1;
            this.items.push(items[item]);
        }
    }

    public setVisibility(visible: boolean) {
        this.visible = visible;
    }
}