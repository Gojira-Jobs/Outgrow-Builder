import {Control} from "./Control";
import {Section} from "./Section";

export class Page {
    pagetype: string;
    visible: boolean = true;
    bgImage: string = '';
    sections: Section[] = [];

    control: Control = {};

    constructor(type?: string, bgImage?: string) {
        this.pagetype = type;
        this.bgImage = bgImage;
    }

    //add sections to page
    public addSections(...sections: any[]) {
        for (let section in sections) {
            this.sections.push(sections[section]);
        }
    }
}
